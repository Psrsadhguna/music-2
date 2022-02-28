const config = require('../../botconfig/config.json');
const ee = require('../../botconfig/embed.json');
const {
  MessageEmbed
} = require('discord.js');
const glob = require('glob');

module.exports = {
  name: 'reload-commands',
  aliases: ['r-cmd'],
  usage: '',
  description: 'Reloads a command',
  cooldown: 0,
  userPermissions: [],
  botPermissions: [],
  ownerOnly: true,

  run: async (client, message, args) => {
    try {
      client.commands.sweep(() => true);
      glob(`${__dirname}/../**/*.js`, async (err, filePaths) => {
        if (err) return console.log(err);
        filePaths.forEach((file) => {
          delete require.cache[require.resolve(file)];

          const command = require(file);

          if (command.name) {
            client.commands.set(command.name, command);
          }

          if (command.aliases && Array.isArray(command.aliases)) {
            command.aliases.forEach((alias) => {
              client.aliases.set(alias, command.name)
            });
          }
        });
      });
      message.reply({embeds: [new MessageEmbed()
        .setColor(ee.color)
        .setDescription(`Reloaded Commands`)]});
    } catch (e) {
      console.log(e)
    }
  },
};