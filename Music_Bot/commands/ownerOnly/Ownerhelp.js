const config = require('../../botconfig/config.json');
const ee = require('../../botconfig/embed.json');
const {
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: "owner-help",
  aliases: ['o-h'],
  usage: '',
  description: "Owner help command",
  cooldown: 0,
  userPermissions: [],
  botPermissions: [],
  ownerOnly: true,

  run: async (client, message, args, prefix) => {
    try {
      message.author.send({embeds: [new MessageEmbed()
        .setColor(ee.color)
        .setAuthor("Owner Commands", message.author.avatarURL({
          dynamic: true
        }))
        .setDescription(`> **Server Prefix:** \`${prefix}\``)

        .addFields({
          name: '__**OwnerOnly**__',
          value: '> \`dm\`, \`reload-commands\`',
        }, {
          name: '__**Systems**__',
          value: '> • \`add-premium\` | \`remove-premium\`\n> • \`blacklist-user\` | \`whitelist-user\`\n> • \`add-blackist-guild\` | \`remove-blackist-guild\`',
        })]})
    } catch (e) {
      console.log(e)
    }
  }
}