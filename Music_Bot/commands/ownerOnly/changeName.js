const config = require('../../botconfig/config.json');
const ee = require('../../botconfig/embed.json');
const {
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: 'change-name',
  aliases: ["changename"],
  usage: '',
  description: '',
  cooldown: 0,
  userPermissions: [],
  botPermissions: [],
  ownerOnly: true,

  run: async (client, message, args, prefix) => {
    if (!args[0])
      return message.channel.send({
        embeds: [new MessageEmbed()
          .setColor(ee.wrongcolor)
          .setTitle(`${client.allEmojis.m} You need to mention a new Bot Name`)
          .setDescription(`**Usage:** \`${prefix}change-name <New Bot Name>\``)
        ]
      });

    if (args.join(" ").length > 32)
      return message.channel.send({
        embeds: [new MessageEmbed()
          .setColor(ee.wrongcolor)
          .setTitle(`${client.allEmojis.x} Bot Name too long, can't have more then 32 Letters!`)
        ]
      });
    client.user.setUsername(args.join(" "))
      .then(user => {
        return message.channel.send({
          embeds: [new MessageEmbed()
            .setColor(ee.color)
            .setTitle(`${client.allEmojis.y} Changed my Name to: \`${user.username}\``)
          ]
        });
      })
      .catch((e) => {
          console.log(e)
          return message.channel.send(`${e.message}`);
      });
  }
}