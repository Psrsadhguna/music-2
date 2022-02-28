const config = require('../../botconfig/config.json');
const ee = require('../../botconfig/embed.json');
const {
  MessageEmbed
} = require('discord.js');
const ms = require('pretty-ms');

module.exports = {
  name: "topservers-id",
  aliases: ["topserver-id"],
  usage: '',
  description: '',
  cooldown: 0,
  userPermissions: [],
  botPermissions: [],
  ownerOnly: true,

  run: async (client, message, args, eec) => {
    try {
      const guilds = client.guilds.cache.sort((a, b) => b.memberCount - a.memberCount).first(100);

      const descriptions = guilds.map((guild, index) => {
        return `${index + 1}) ${guild.id} -> ${guild.memberCount} members`;
      }).join("\n");

      message.channel.send({ embeds: [new MessageEmbed()
        .setTitle(`${client.allEmojis.y} Top Guilds`)
        .setFooter(ee.footertext, ee.footericon)
        .setDescription(descriptions)
        .setColor(eec.color)]})
    } catch (e) {
      console.log(e)
    }
  },
};