const {
  Client,
  Message,
  MessageActionRow,
  MessageButton,
  MessageEmbed,
  MessageSelectMenu,
  MessageCollector,
} = require("discord.js");

const { Command } = require('reconlx')
module.exports = new Command({
name: 'report',
description: 'report a bug of the bot',
options: [
  {
    name: 'bug',
    description: 'the bug that ur reporting',
    type: 'STRING',
    required: true
  },
],
run: async (client, interaction, args) => {

  const channel = client.channels.cache.get("909806867448991775")

  const bug = interaction.options.getString('bug')

  const reportembed = new MessageEmbed()
    .setTitle("New Report")
    .addFields(
      { name: 'Author', value: `${interaction.user.tag.toString()}`, inline: true },
      { name: 'Guild', value: `${interaction.guild.name}`, inline: true },
      { name: 'Report', value: `${bug}` },
    )
    .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
    .setFooter('Made by WHITE DEVIL#0666')
    .setTimestamp();

const reeded = interaction.user;

interaction.followUp({ content: "Your Bug has been sent", ephemeral:true })


  const replybtn = new MessageButton()
    .setLabel('Reply')
    .setStyle('SUCCESS')
    .setCustomId('replybtn')
    const row = new MessageActionRow().addComponents([replybtn]);

    const replybtn_edit = new MessageButton().setDisabled()
    .setLabel('Reply')
    .setStyle('SUCCESS')
    .setCustomId('replybtn')

    const row_edit = new MessageActionRow().addComponents([replybtn_edit]);
  const eeew = await channel.send({ embeds: [reportembed], components: [row] });

  //let filter = (m) => m.user.id === "704636297553117299"
  let collector = eeew.createMessageComponentCollector({
    //filter,
    type: 'BUTTON',
    time: 600000
  })
  collector.on('collect', async (button) => {
    if (button.customId === 'replybtn') {
      button.reply({ content: 'What do you want to reply with?', ephemeral: true})
      const filter = m => m.author.id !== client.user.id;
      const titleclr = button.channel.createMessageCollector({
        filter,
        time: 60000,
        max: 1
      })

      titleclr.on('collect', async (m) => {
        if (m.author.id == client.user.id) return m.reply("filter didn't work...");
        const replembed = new MessageEmbed()
          .setTitle('Report Replied!')
          .setColor('GREEN')
          .setDescription(`WHITE DEVIL#0666 Replied to your report\n\n**Report**: ${bug}\n\n**Reply**: ${m.content}`)
          .setFooter('Made by WHITE DEVIL#0666');
        m.delete()
        reeded.send({ embeds: [replembed] })
        button.followUp({ content: 'Your reply has been sent', ephemeral:true })
        eeew.edit({components: [row_edit] });
      })
    }
  });
}
})