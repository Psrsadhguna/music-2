const config = require('../../botconfig/config.json');
const ee = require('../../botconfig/embed.json');
const {
  MessageEmbed
} = require('discord.js');
const fs = require('fs');
const fetch = require('node-fetch');

module.exports = {
  name: 'change-avatar',
  aliases: ["changeavatar"],
  usage: '',
  description: '',
  cooldown: 0,
  userPermissions: [],
  botPermissions: [],
  ownerOnly: true,

  run: async (client, message, args, prefix) => {
    var url;
    if (message.attachments.size > 0) {
      if (message.attachments.every(attachIsImage)) {
        const response = await fetch(url);
        const buffer = await response.buffer();
        fs.writeFile(`./image.jpg`, buffer, () =>
          console.log('Finished downloading the Avatar!'));
        client.user.setAvatar(`./image.jpg`)
          .then(user => {
            return message.channel.send({
              embeds: [new MessageEmbed()
                .setTitle(`${client.allEmojis.y} Successfully changed the Bot Avatar!`)
                .setColor(ee.color)
              ]
            });
          })
          .catch(e => {
            return;
          });
      } else {
        return message.channel.send({
          embeds: [new MessageEmbed()
            .setTitle(`${client.allEmojis.x} ERROR | Could not use your Image as an Avatar, make sure it is a \`png\` or \`jpg\``)
            .setColor(ee.wrongcolor)
          ]
        });
      }
    } else if (message.content && textIsImage(message.content)) {
      url = args.join(" ")
      const response = await fetch(url);
      const buffer = await response.buffer();
      await fs.writeFile(`./image.jpg`, buffer, () =>
        console.log('finished downloading the Avatar!'));
      client.user.setAvatar(`./image.jpg`)
        .then(user => {
          try {
            fs.unlinkSync()
          } catch {

          }
          return message.channel.send({
            embeds: [new MessageEmbed()
              .setTitle(`${client.allEmojis.y} Successfully changed the Bot Avatar!`)
              .setColor(ee.color)
            ]
          });
        })
        .catch(e => {
          return;
        });

    } else {
      return message.channel.send({
        embeds: [new MessageEmbed()
          .setTitle(`${client.allEmojis.x} ERROR | Could not use your Image as an Avatar, make sure it is a \`png\` or \`jpg\``)
          .setDescription(`**Usage:** \`${prefix}change-avatar <AVATARLINK/IMAGE>\``)
          .setColor(ee.wrongcolor)
        ]
      });
    }
  }
}

function attachIsImage(msgAttach) {
    url = msgAttach.url;

    //True if this url is a png image.
    return url.indexOf("png", url.length - "png".length /*or 3*/ ) !== -1 ||
      url.indexOf("jpeg", url.length - "jpeg".length /*or 3*/ ) !== -1 ||
      url.indexOf("jpg", url.length - "jpg".length /*or 3*/ ) !== -1;
  }

  function textIsImage(url) {
    return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
  }