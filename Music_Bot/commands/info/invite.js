const {
    Client,
    Message,
    MessageActionRow,
    MessageButton,
    MessageEmbed,
} = require("discord.js");
 

module.exports = {
   name: "invite",
   aliases: ["i", "inv"],
   description: "Shows invite links",
   botpermissions: ["ADMINISTRATOR"],
   usage: "",
   category: "Info",
   cooldowns: 2000,
   developersOnly: false,
   toggleOff: false,
run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setTitle("Invite & Support Link!")
            .addField("<:link:916022409402937435> **Invite Link**", `<a:arrow2:919233599763521586> [Click here to invite me](https://discord.com/api/oauth2/authorize?client_id=937747502709485660&permissions=2150714433&scope=bot%20applications.commands)`)
            .addField("<:link:916022409402937435> **Support Server**", `<a:arrow2:919233599763521586> [Click to join support Server](https://discord.gg/E6mv6DpcyS)`)
            .setFooter(`Requested by ${message.author.tag}`, client.user.displayAvatarURL())
            .setTimestamp()

            const row = new MessageActionRow().addComponents(
                new MessageButton()
            .setLabel("Invite Me")
            .setURL("https://discord.com/api/oauth2/authorize?client_id=937747502709485660&permissions=2150714433&scope=bot%20applications.commands")
            .setStyle("LINK"),

            new MessageButton()
            .setLabel("Support Server")
            .setURL("https://discord.gg/E6mv6DpcyS")
            .setStyle("LINK"),
            );

            message.channel.send({ embeds: [embed], components: [row]  });

    }
}
