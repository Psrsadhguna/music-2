const config = require('../../botconfig/config.json');
const ee = require('../../botconfig/embed.json');
const {
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: 'set-prefix',
  aliases: [],
  usage: '[prefix]',
  description: '',
  cooldown: 0,
  userPermissions: ['ADMINISTRATOR'],
  botPermissions: [],

  run: async (client, message, args) => {
    try {

      if (!args[0]) return message.reply({
        embeds: [new MessageEmbed()
          .setColor(ee.mediancolor)
          .setTitle(`${client.allEmojis.x} Please provide a new prefix!`)
        ]
      })

      if (args[1]) return message.reply({
        embeds: [new MessageEmbed()
          .setColor(ee.mediancolor)
          .setTitle(`${client.allEmojis.x} Please provide a new prefix!`)
        ]
      })

      if (args[0].length > 5) return message.reply({
        embeds: [new MessageEmbed()
          .setColor(ee.wrongcolor)
          .setTitle(`${client.allEmojis.x} This prefix is too long, you have max 5 charaters`)
        ]
      })

      client.settings.set(message.guild.id, args[0], `prefix`)
      return message.reply({
        embeds: [new MessageEmbed()
          .setColor(ee.color)
          .setFooter(ee.footertext, ee.footericon)
          .setTitle(`${client.allEmojis.y} The Prefix has been set to \`${args[0]}\``)
        ]
      })

    } catch (e) {
      console.log(e)
    }
  }
}