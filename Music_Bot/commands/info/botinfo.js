const config = require('../../botconfig/config.json');
const ee = require('../../botconfig/embed.json');
const {
  MessageEmbed
} = require('discord.js');
const {
  version
} = require('../../package.json');
const ms = require('pretty-ms');
const {
  version: discordjsVersion
} = require('discord.js');

module.exports = {
  name: "botinfo",
  aliases: ['b-info', 'botstats'],
  usage: '',
  description: 'Check\'s bot\'s status',
  cooldown: 0,
  userPermissions: [],
  botPermissions: [],

  run: async (client, message, args) => {
    try {
      message.reply({
				embeds: [new MessageEmbed()
        .setColor(ee.color)
        .setAuthor(`${client.user.username} v${version}`, client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL({
          dynamic: true
        }))
        .addField('❯ Uptime :', `${ms(client.uptime)}`, true)
        .addField('❯ WebSocket Ping:', `${client.ws.ping}ms`, true)
        .addField('❯ Memory:', `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap`, true)
        .addField('❯ Guild Count:', `${client.guilds.cache.size} guilds`, true)
        .addField(`❯ User Count:`, `${client.guilds.cache.reduce((users , value) => users + value.memberCount, 0)} users`, true)
        .addField('❯ Commands:', `${client.commands.size} cmds`, true)
        .addField('❯ Node:', `${process.version} on ${process.platform} ${process.arch}`, true)
        .addField('❯ Cached Data:', `${client.users.cache.size} users\n${client.emojis.cache.size} emojis`, true)
        .addField('❯ Discord.js:', `${discordjsVersion}`, true)
        .setFooter(`Requested By ${message.author.username}`, message.author.displayAvatarURL({
          dynamic: true
        }))
        .setTimestamp()
        ]});
    } catch (e) {
      console.log(e)
    }
  }
}