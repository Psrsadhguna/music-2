const config = require('../../botconfig/config.json');
const ee = require('../../botconfig/embed.json');
const {
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: 'leave-guild',
  aliases: ["leave-server"],
  usage: '',
  description: '',
  cooldown: 0,
  userPermissions: [],
  botPermissions: [],
  ownerOnly: true,

  run: async (client, message, args) => {
    if (!args[0]) return message.reply({embeds: [new MessageEmbed()
    .setColor(ee.mediancolor)
    .setDescription(`${client.allEmojis.x} Please Mention The Server ID`)]})
    let guild = client.guilds.cache.find(g => g.id === args.join(" ") || g.name.toLowerCase() === args.join(" ").toLowerCase()) || message.guild

    // let invite
    // let textChannels = guild.channels.cache.find(c => c.type === "GUILD_TEXT" && c.permissionsFor(guild.me).has("CREATE_INSTANT_INVITE"))

    // if (!textChannels) { invite = "No channels" }
    // await textChannels.createInvite({
    //   maxAge: 0,
    //   maxUses: 0
    // }).then((inv) => {
    //   invite = inv.url
    // })

    // const embed = new MessageEmbed()
    //   .addFields(
    //     {
    //       name: "Guild ID",
    //       value: `\`${guild.id}\``,
    //       inline: true
    //     },
    //     {
    //       name: "Member Count",
    //       value: `${guild.memberCount} members`,
    //       inline: true
    //     },
    //     {
    //       name: "Invite",
    //       value: `${invite}`
    //     })
    //   .setColor(client.color)
    //   .setFooter(`${client.guilds.cache.size} Guilds`, client.user.displayAvatarURL())

    // client.channels.cache.find(c => c.id === "900670373266337792").send({ embeds: [embed] })
    guild.leave()

    message.reply({embeds: [new MessageEmbed()
    .setColor(ee.color)
    .setDescription(`${client.allEmojis.y} Successfully left **${guild.name}** (${guild.id})`)]})
  }
}