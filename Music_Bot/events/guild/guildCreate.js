const config = require('../../botconfig/config.json');
const ee = require('../../botconfig/embed.json');
const {
  MessageEmbed
} = require('discord.js');
const {
  inviteLogs
} = require('../../botconfig/channelIDs.json')

module.exports = async (client, guild) => {
    try {
      if (!guild || guild.available === false) return
      let theowner = "NO OWNER DATA! ID: ";
      await guild.fetchOwner().then(({ user }) => {
        theowner = user;
      }).catch(() => {})

      const channel = client.channels.cache.get(inviteLogs);
      if (!channel) return;
      
      const embed = new MessageEmbed()
      .setTitle(`${client.allEmojis.y} Added To New Guild!`)
      .addField(`Guild Info`,
      `>>> **Guild Name:** \`${guild.name}\`
      **Guild ID:** \`${guild.id}\`
      **Owner Name:** \`${theowner ? `${theowner.tag}` : `${theowner}`}\`
      **Owner ID:** \`${theowner ? `${theowner.id}` : `${guild.ownerId}`}\`
      **Member Count:** \`${guild.memberCount}\``)
      .setThumbnail(guild.iconURL({ dynamic: true }))
      .setColor("GREEN")
      .setFooter(`Currently in ${client.guilds.cache.size} guilds!`)
      .setTimestamp();
      channel.send({embeds: [embed]}).catch(() => {})
    } catch (e) {
        console.log(e)
    }
};

/**
 * @INFO
 * Bot Coded by Zedro#2742 | https://discord.gg/8fYUFxMtAq
 * @INFO
 * Work for Milanio Development | https://discord.gg/8fYUFxMtAq
 * @INFO
 * Please Mention Us Milanio Development, When Using This Code!
 * @INFO
 */