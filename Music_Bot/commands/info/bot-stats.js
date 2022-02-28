const config = require('../../botconfig/config.json');
const ee = require('../../botconfig/embed.json');
const {
  MessageEmbed
} = require('discord.js');
const {
  version: djsversion
} = require('discord.js');
const {
  mem,
  cpu,
  os
} = require('node-os-utils');
const {
  oneLine,
  stripIndent
} = require('common-tags');
const moment = require('moment');
//const ms = require("parse-ms")
const {
  version: discordjsVersion
} = require('discord.js');
const {
  version
} = require('../../package.json');
//const Guild = require('../../database/schemas/Guild');

module.exports = {
  name: 'stats',
  aliases: ['stat'],
  usage: '',
  description: 'Displays Bots Statistics',
  cooldown: 3,
  userPermissions: [],
  botPermissions: [],

  run: async (client, message, args) => {
    try {
      const {
        totalMemMb,
        usedMemMb
      } = await mem.info();
      const serverStats = stripIndent `
      OS -- ${await os.oos()}
      CPU -- ${cpu.model()}
      Cores -- ${cpu.count()}
      CPU Usage -- ${await cpu.usage()} %
      RAM -- ${totalMemMb} MB 
    `;

      //Shards -- ${this.client.shard ? `${this.client.shard.count}` : 'None'}
      //User -- ${this.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}
      //Uptime -- ${ms(message.client.uptime)}
      const tech = stripIndent `
      Ping -- ${Math.round(message.client.ws.ping)}ms
      Version -- ${version}
      Library -- Discord.js ${discordjsVersion}
      Environment -- Node.js ${process.version}
      Servers -- ${message.client.guilds.cache.size}
      Channels -- ${message.client.channels.cache.size}
      Commands -- ${message.client.commands.size}
    `;

      message.channel.send({
				embeds: [new MessageEmbed()
        .setAuthor(`Bot Stats`, client.user.displayAvatarURL({
          dynamic: true
        }))
        .addField(`General Information`, `\`\`\`css\n${tech}\`\`\``, true)
        .addField(`Statistics`, `\`\`\`css\n${serverStats}\`\`\``)
        .setFooter(`Requested By ${message.author.username}`, message.author.displayAvatarURL({
          dynamic: true
        }))
        .setTimestamp()
        .setColor(ee.color)]});
    } catch (e) {
      console.log(e)
    }
  }
}