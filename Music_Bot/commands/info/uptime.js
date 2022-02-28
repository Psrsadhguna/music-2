const config = require('../../botconfig/config.json');
const ee = require('../../botconfig/embed.json');
const {
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: "uptime",
  aliases: ["up"],
  usage: '',
  description: "Shows Uptime of bot",
  cooldown: 0,
  userPermissions: [],
  botPermissions: [],

  run: async (client, message, args) => {
    try {
      let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;

      message.reply({
				embeds: [new MessageEmbed()
        .setTitle("Uptime")
        .setColor(ee.color)
        .setDescription(`**${days}** days, **${hours}** hours, **${minutes}** minutes, **${seconds}** seconds`)
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter(message.guild.name, message.guild.iconURL())
        .setAuthor(client.user.username, client.user.displayAvatarURL())]});
    } catch (e) {
      console.log(e)
    }
  }
}