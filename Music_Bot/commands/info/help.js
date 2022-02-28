const config = require('../../botconfig/config.json');
const ee = require('../../botconfig/embed.json');
const Discord = require('discord.js')
const {
    MessageEmbed,
    MessageActionRow,
    MessageSelectMenu,
    MessageButton
} = require('discord.js');

module.exports = {
  name: "help", //the command name for execution & for helpcmd [OPTIONAL]
  category: "Info",
  usage: "help [cmdname]",
  aliases: ["h", "halp", "helpme"],
  description: "Returns all Commmands, or one specific command", //the command description for helpcmd [OPTIONAL]
  cooldown: 10,
  userPermissions: [],
  botPermissions: [],

  run: async (client, message, args, prefix) => {
    try {

    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;

    //message.reply({embeds: [new MessageEmbed()
    // .setColor(ee.color)
    // .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
    // .setTimestamp()
    // .setImage(ee.helpgif)
     //.setFooter(ee.footertext, ee.footericon)
    // .setTitle(`🔰 __**HELP MENU**__ 🔰`)
    // .setDescription(`🔰 | __**INFORMATION**__\n> \`help\`, \`botinfo\`, \`stats\`, \`ping\`, \`uptime\`, \`version\`\n\n🎶 __**| MUSIC**__\n> \`play\`, \`skip\`, \`stop\`, \`volume\`, \`loop\`, \`addrelated\`, \`autoplay\`, \`mix\`, \`playskip\`, \`playtop\`\n\n🌀 | __**QUEUE**__\n> \`clearqueue\`,\`jump\`, \`list\`, \`move\`, \`previous\`, \`remove\`, \`shuffle\`, \`status\`, \n\n❔ | __**FILTER**__\n> \`addfilter\`, \`clearfilter\`, \`custombassboost\`, \`customspeed\`, \`filters\`, \`removefilter\`, \`setfilter\`\n\n📈__**STATS**__\n> ⚙️ **${client.commands.size} Commands**\n> 📁 on **${client.guilds.cache.size} Guilds**\n> ⌚️ \`${days} Days\`, \`${hours} Hrs\`, \`${minutes} Mins\`, \`${seconds} Secs\` **Uptime**\n> 📶 \`${client.ws.ping}ms\` **Ping**`)
    // .addField("Important Links:", ` • [Invite Me](${process.env.INVITE}) • [Website](${process.env.WEBSITE}) • [Support](${process.env.SUPPORT})`, true)]})

        const embed = new MessageEmbed()
            .setTitle("🔰 __**HELP MENU**__ 🔰")
            .setThumbnail(client.user.displayAvatarURL({
                dynamic: true
            }))
            .setDescription(`**[Invite Me](https://discord.com/api/oauth2/authorize?client_id=937747502709485660&permissions=8&scope=bot%20applications.commands)\n[Support Server](https://discord.gg/E6mv6DpcyS)**`)
            .addField("Important Links:", ` • [Invite Me](${process.env.INVITE}) • [Support](${process.env.SUPPORT})`, true)
            .setColor(ee.color)
            .setImage("https://cdn.discordapp.com/avatars/849299149874004019/a_346bd99b25ad98e2115252bad8e6ee28.gif?size=4096")
            .setTimestamp()

        const embed1 = new MessageEmbed()
            .setDescription(`🔰︱__**INFORMATION**__\n\n> \`help\`, \`ping\`, \`uptime\`, \`version\``)
            .setColor(ee.color)
            .setThumbnail(client.user.displayAvatarURL({
                dynamic: true
            }))
            .setImage(ee.helpgif)
            .setTimestamp()

        const embed2 = new MessageEmbed()
            .setDescription(`🛡️︱__**SETUP**__\n\n • \`set-prefix\``)
            .setColor(ee.color)
            .setThumbnail(client.user.displayAvatarURL({
                dynamic: true
            }))
            .setImage(ee.helpgif)
            .setTimestamp()

        const embed3 = new MessageEmbed()
            .setDescription(`🎶︱__**MUSIC**__\n\n> \`play\`, \`skip\`, \`stop\`, \`volume\`, \`loop\`, \`addrelated\`, \`autoplay\`, \`mix\`, \`playskip\`, \`playtop\``)
            .setColor(ee.color)
            .setThumbnail(client.user.displayAvatarURL({
                dynamic: true
            }))
            .setImage(ee.helpgif)
            .setTimestamp()

        const embed4 = new MessageEmbed()
            .setDescription(`📈︱__**FILTER**__\n\n> \`addfilter\`, \`clearfilter\`, \`custombassboost\`, \`customspeed\`, \`filters\`, \`removefilter\`, \`setfilter\``)
            .setColor(ee.color)
            .setThumbnail(client.user.displayAvatarURL({
                dynamic: true
            }))
            .setImage(ee.helpgif)
            .setTimestamp()

        const embed5 = new MessageEmbed()
            .setDescription(`📀︱__**QUEUE**__\n\n> \`clearqueue\`,\`jump\`, \`list\`, \`move\`, \`previous\`, \`remove\`, \`shuffle\`, \`status\``)
            .setColor(ee.color)
            .setThumbnail(client.user.displayAvatarURL({
                dynamic: true
            }))
            .setImage(ee.helpgif)
            .setTimestamp()

        const embed6 = new MessageEmbed()
            .setDescription(`🎮︱__**REPORT**__\n\n> \`report-bug\`, \`feedback\`, \`suggest\``)
            .setColor(ee.color)
            .setThumbnail(client.user.displayAvatarURL({
                dynamic: true
            }))
            .setImage(ee.helpgif)
            .setTimestamp()

        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                .setCustomId('select')
                // .setMaxValues(2)
                // .setMinValues(1)
                .setPlaceholder('Click me to view the Help Menu Category Pages!')
                .addOptions([{
                        label: 'Overview',
                        description: 'The Overview of me!',
                        value: 'first',
                        emoji: '<a:yes:899930695521148929>',
                    },
                    {
                        label: 'Information',
                        description: 'Information Commands',
                        value: 'second',
                        emoji: '<a:yellowbook:935930732516356096>',
                    },
                    {
                        label: 'Setup',
                        description: 'Setup Commands',
                        value: 'third',
                        emoji: '<a:settings:915999243410473010>',
                    },
                    {
                        label: 'Music',
                        description: 'Music Commands',
                        value: 'fourth',
                        emoji: '<a:logo:915553528666288138>',
                    },
                    {
                        label: 'Filter',
                        description: 'Filter Commands',
                        value: 'fifth',
                        emoji: '<:lol:916024389168943185>',
                    },
                    {
                        label: 'Queue',
                        description: 'Queue Commands',
                        value: 'sixth',
                        emoji: '<:ItemMusicNote:915553560358420510>',
                    },
                    {
                        label: 'Report',
                        description: 'Report Commands',
                        value: 'seven',
                        emoji: '<:reported:915553516578287657>',
                    },
                ]),
            )

         //const invite = new MessageActionRow()
             //.addComponents(
             //    new MessageButton()
             //    .setLabel('Invite Me')
             //    .setStyle('LINK')
             //    .setEmoji('916022409402937435')
             //    .setURL(process.env.INVITE)
           //  )

        // const website = new MessageActionRow()
           //     .addComponents(
           //      new MessageButton()
           //      .setLabel('Website')
           //      .setStyle('LINK')
           //      .setEmoji('915553546496258148')
           //      .setURL(process.env.WEBSITE)
           //  )

         //const support = new MessageActionRow()
           //  .addComponents(
           //      new MessageButton()
           //      .setLabel('Support')
           //     .setStyle('LINK')
           //     .setEmoji('915576166268686336')
            //     .setURL(process.env.SUPPORT)
           //  )


          // await message.reply({
          //   content: 'ㅤ',
          //   ephemeral: true,
          //  embeds: [embed],
          //   components: [row, invite, website, support]
        // });
        let theMsg = await message.reply({
            content: 'ㅤ',
            ephemeral: true,
            embeds: [embed],
            components: [row]
        });


        // const filter = (interaction) => interaction.user.id === message.author.id;
        const collector = message.channel.createMessageComponentCollector({
            filter: interaction => (interaction.isButton() || interaction.isSelectMenu()) && interaction.message.author.id == client.user.id,
            time: 100000
        })

        collector.on("collect", async (interaction) => {
            const value = interaction.values[0]
            if (value === "first") {
                interaction.reply({
                    embeds: [embed],
                    ephemeral: true
                })
            }
            if (value === "second") {
                interaction.reply({
                    embeds: [embed1],
                    ephemeral: true
                })
            }
            if (value === "third") {
                interaction.reply({
                    embeds: [embed2],
                    ephemeral: true
                })
            }
            if (value === "fourth") {
                interaction.reply({
                    embeds: [embed3],
                    ephemeral: true
                })
            }
            if (value === "fifth") {
                interaction.reply({
                    embeds: [embed4],
                    ephemeral: true
                })
            }
            if (value === "sixth") {
                interaction.reply({
                    embeds: [embed5],
                    ephemeral: true
                })
            }if (value === "seven") {
                interaction.reply({
                    embeds: [embed6],
                    ephemeral: true
                })
            }        })

        collector.on("end", (d) => {
            theMsg.edit({
                content: `This Help Menu is expired! Please retype \`${prefix}help\` to view again.`,
                components: []
            }) 
        })


    } catch (err) {
      console.log(err)
    }
  }
}