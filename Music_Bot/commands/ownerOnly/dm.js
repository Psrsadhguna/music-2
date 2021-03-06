const config = require('../../botconfig/config.json');
const ee = require('../../botconfig/embed.json');
const {
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: "dm",
  aliases: [],
  usage: '',
  description: "DM a user in the guild",
  cooldown: 0,
  userPermissions: [],
  botPermissions: [],
  ownerOnly: true,

  run: async (client, message, args) => {
    try {
      let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
      if (!user)
        return message.channel.send({ embeds:[new MessageEmbed()
          .setColor(ee.mediancolor)
          .setDescription(`You did not mention a user, or you gave an invalid id`)]});
      if (!args.slice(1).join(" "))
        return message.channel.send({ embeds:[new MessageEmbed()
          .setColor(ee.mediancolor)
          .setDescription(`You did not specify your message`)]});
      user.user
        .send({ embeds:[new MessageEmbed()
          .setColor(ee.color)
          .setDescription(args.slice(1).join(" "))]})
        .catch(() => message.channel.send({ embeds:[new MessageEmbed()
          .setColor(ee.wrongcolor)
          .setDescription(`That user could not be DM!`)]}))
        .then(() => message.channel.send({ embeds:[new MessageEmbed()
          .setColor(ee.color)
          .setDescription(`Sent a message to ${user.user.tag}`)]}));
    } catch (e) {
      console.log(e)
    }
  },
};