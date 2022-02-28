const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const {
  MessageEmbed
} = require("discord.js");

module.exports = {
  name: "ping",
  description: "Gives you information on how fast the Bot can respond to you",
  cooldown: 5,
  userPermissions: [],
  botPermissions: [],

  run: async (client, interaction, args, eec) => {
    try {
      interaction.reply({embeds:[new MessageEmbed()
          .setColor("#A020F0")
          .setDescription(`🤖 **Bot Ping:** \`${Date.now() - interaction.createdTimestamp}ms\`\n\n⌛ **Api Latency:** \`${Math.round(client.ws.ping)}ms\``, true)]}
        )
    } catch (error) {
      console.error(error)
    }
  }
}