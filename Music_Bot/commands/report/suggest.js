const config = require('../../botconfig/config.json');
const ee = require('../../botconfig/embed.json');
const {
  MessageEmbed
} = require('discord.js');
const {
  suggestionChannel
} = require('../../botconfig/channelIDs.json')

module.exports = {
  name: "suggest",
  aliases: ['suggestion'],
  usage: '',
  description: "bot suggest command",
  cooldown: 0,
  userPermissions: [],
  botPermissions: [],

  run: async (client, message, args, eec) => {
    try {
      const msg = args.join(" ")
      if (!msg) return message.reply({ embeds:[new MessageEmbed()
        .setColor(ee.mediancolor)
        .setFooter(ee.footertext, ee.footericon)
        .setDescription(`Please specify a suggestion for bot!`)]})

      message.reply({ embeds:[new MessageEmbed()
        .setColor(eec.color)
        .setFooter(ee.footertext, ee.footericon)
        .setDescription(`✉ | ${message.author.username}, Thanks for the suggestion! :)`)]})

      client.channels.cache.get(suggestionChannel).send({ embeds:[new MessageEmbed()
        .setColor(eec.color)
        .setTitle(`__New Suggestion:__`)
        .setDescription(`**Author:**\n> ${message.author.username} | (${message.author.id})\n**Suggestion:**\n> ${msg}`)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setFooter(`Suggested From: ${message.guild.name} | (${message.guild.id})`, message.guild.iconURL({
          dynamic: true
        }))]}).then(sendMessage => sendMessage.react(client.allEmojis.y)).then(reaction => reaction.message.react(client.allEmojis.x))
    } catch (e) {
      console.log(e)
    }
  }
}