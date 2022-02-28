const config = require('../../botconfig/config.json');
const ee = require('../../botconfig/embed.json');
const {
  MessageEmbed
} = require('discord.js');
const {
  bugChannel
} = require('../../botconfig/channelIDs.json')

module.exports = {
  name: "report-bug",
  aliases: ["bug"],
  usage: '',
  description: "bug command",
  cooldown: 0,
  userPermissions: [],
  botPermissions: [],

  run: async (client, message, args, eec) => {
    try {
      const msg = args.join(" ")
      if (!msg) return message.reply({ embeds:[new MessageEmbed()
        .setColor(ee.mediancolor)
        .setFooter(ee.footertext, ee.footericon)
        .setDescription(`Please specify the bug!`)]})

      message.reply({ embeds:[new MessageEmbed()
        .setColor(eec.color)
        .setFooter(ee.footertext, ee.footericon)
        .setDescription(`✉ | ${message.author.username}, Thanks for finding the bug!`)]})

      client.channels.cache.get(bugChannel).send({ embeds:[new MessageEmbed()
        .setColor(ee.wrongcolor)
        .setTitle(`__New Bug:__`)
        .setDescription(`**Author:**\n> ${message.author.username} | (${message.author.id})\n**Report:**\n> ${msg}`)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setFooter(`Bug From: ${message.guild.name} | (${message.guild.id})`, message.guild.iconURL({
          dynamic: true
        }))]})
    } catch (e) {
      console.log(e)
    }
  }
}