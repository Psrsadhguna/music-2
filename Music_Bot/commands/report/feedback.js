const config = require('../../botconfig/config.json');
const ee = require('../../botconfig/embed.json');
const {
  MessageEmbed
} = require('discord.js');
const {
  feedbackChannel
} = require('../../botconfig/channelIDs.json')

module.exports = {
  name: "feedback",
  aliases: [],
  usage: '',
  description: "feedback command",
  cooldown: 0,
  userPermissions: [],
  botPermissions: [],

  run: async (client, message, args, eec) => {
    try {
      const msg = args.join(" ")
      if (!msg) return message.reply({ embeds:[new MessageEmbed()
        .setColor(ee.mediancolor)
        .setFooter(ee.footertext, ee.footericon)
        .setDescription(`Please mention the feedback!`)]})

      message.reply({ embeds:[new MessageEmbed()
        .setColor(eec.color)
        .setFooter(ee.footertext, ee.footericon)
        .setDescription(`✉ | ${message.author.username}, Thanks for the feedback!`)]})

      client.channels.cache.get(feedbackChannel).send({ embeds:[new MessageEmbed()
        .setColor(eec.color)
        .setTitle(`__New Fedback:__`)
        .setDescription(`**Author:**\n> ${message.author.username} | (${message.author.id})\n**Feedback:**\n> ${msg}`)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setFooter(`Feedback From: ${message.guild.name} | (${message.guild.id})`, message.guild.iconURL({
          dynamic: true
        }))
        ]})
    } catch (e) {
      console.log(e)
    }
  }
}