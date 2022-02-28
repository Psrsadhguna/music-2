const config = require('../../botconfig/config.json');
const ee = require('../../botconfig/embed.json');
const {
  MessageEmbed
} = require('discord.js');
const {
  version
} = require('../../package.json');

module.exports = {
  name: 'version',
  aliases: [],
  usage: '',
  description: "Version of the BOT!",
  cooldown: 1000 * 10,
  userPermissions: [],
  botPermissions: [],

  run: async (client, message, args) => {
    try {
      message.reply({
				embeds: [new MessageEmbed()
        .setTitle(`${client.user.username}'s' Version!`)
        .setDescription(`Version: **${version}**`)
        .setColor(ee.color)
        .setThumbnail(client.user.displayAvatarURL({
          dynamic: true
        }))
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()]});
    } catch (e) {
      console.log(e)
    }
  }
}