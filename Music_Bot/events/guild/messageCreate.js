const config = require('../../botconfig/config.json');
const ee = require('../../botconfig/embed.json');
const {
	Collection,
	MessageEmbed
} = require('discord.js');
const Discord = require("discord.js");

module.exports = async (client, message) => {
	try {
		if (!message.guild) return;
		if (!message.channel) return;
		if (message.author.bot) return;
		if (message.channel?.partial) await message.channel.fetch().catch(() => {});
		if (message.member?.partial) await message.member.fetch().catch(() => {});

		client.settings.ensure(message.guild.id, {
			prefix: process.env.PREFIX
		})

		let prefix = client.settings.get(message.guild.id, `prefix`)

		const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})`);
		if (!prefixRegex.test(message.content)) return;
		const [, mPrefix] = message.content.match(prefixRegex);

    if(!message.guild.me.permissions.has(Discord.Permissions.FLAGS.SEND_MESSAGES)) return;
    if(!message.guild.me.permissions.has(Discord.Permissions.FLAGS.USE_EXTERNAL_EMOJIS)) 
    return message.reply({content: `❌ I am missing the Permission to \`USE_EXTERNAL_EMOJIS\`` })
    if(!message.guild.me.permissions.has(Discord.Permissions.FLAGS.EMBED_LINKS)) 
    return message.reply({content: `${client.allEmojis.x} I am missing the Permission to \`EMBED_LINKS\`` })
    if(!message.guild.me.permissions.has(Discord.Permissions.FLAGS.ADD_REACTIONS)) 
    return message.reply({embeds: [new MessageEmbed()
      .setColor(ee.wrongcolor)
      .setTitle(`${client.allEmojis.x} I am missing the Permission to \`ADD_REACTIONS\``)]})

		const args = message.content.slice(mPrefix.length).trim().split(/ +/);
		const cmd = args.shift()?.toLowerCase();

    if (cmd.length === 0) {
      if (mPrefix.includes(client.user.id))
        return message.reply({ embeds: [new MessageEmbed()
						.setColor(ee.color)
						.setTitle(`${client.allEmojis.y} To See All Commands Type: \`${prefix}help\``)]
				}).catch((e) => {
						// console.log(e)
					});
      return;
    }

		let command = client.commands.get(cmd);
		if (!command) command = client.commands.get(client.aliases.get(cmd));
		if (command) {
			try {
        if (command.toggleOff) {
          return await message.reply({ embeds: [new MessageEmbed()
          .setDescription(`${client.allEmojis.x} **That Command Has Been Disabled By The Developers! Please Try Later.**`)
          .setColor(ee.wrongcolor)
          ] 
          }).catch((e) => {
						console.log(e)
					});
        }
				if (command.ownerOnly) {
					if (!client.owners.includes(message.author.id)) return await message.reply({
						embeds: [new MessageEmbed()
							.setDescription(`${client.allEmojis.x} **You cannot use \`${prefix}${command.name}\` command as this is a developer command.**`)
							.setColor(ee.wrongcolor)
						]
					}).catch((e) => {
						console.log(e)
					});
				}
				if (!message.member.permissions.has(command.userPermissions || [])) return await message.reply({
					embeds: [new MessageEmbed()
						.setDescription(`${client.allEmojis.x} **You do not have \`${command.userPermissions.join(", ")}\` permission to use \`${prefix}${command.name}\` command!**`)
						.setColor(ee.wrongcolor)
					]
				}).catch((e) => {
					console.log(e)
				});
				if (!message.guild.me.permissions.has(command.botPermissions || [])) return await message.reply({
					embeds: [new MessageEmbed()
						.setDescription(`${client.allEmojis.x} **I do not have \`${command.botPermissions.join(", ")}\` permission to use \`${prefix}${command.name}\` command!**`)
						.setColor(ee.wrongcolor)
					]
				}).catch((e) => {
					console.log(e)
				});
				if (onCoolDown(message, command)) {
					return await message.reply({
						embeds: [new MessageEmbed()
							.setColor(ee.wrongcolor)
							.setDescription(`${client.allEmojis.x} **Please wait \`${onCoolDown(message, command).toFixed(1)} seconds\` Before using the \`${prefix}${command.name}\` command again!.**`)
						]
					});
				}
				command.run(client, message, args, prefix);
			} catch (error) {
        console.log(error)
            return message.reply({
              embeds: [new MessageEmbed()
                .setColor(ee.wrongcolor)
                .setFooter(ee.footertext, ee.footericon)
                .setTitle(`${client.allEmojis.x} Something went wrong while, running the: ${prefix}${command.name} command`)
                .setDescription(`\`\`\`${error.message}\`\`\``)]
            }).then(msg => {setTimeout(()=>{msg.delete().catch((e) => {console.log(String(e).grey)})}, 4000)}).catch((e) => {console.log(String(e).grey)});
        }
		} else
        return 
        // message.reply({
        //   embeds: [new MessageEmbed()
        //     .setColor(ee.wrongcolor)
        //     .setFooter(ee.footertext, ee.footericon)
        //     .setTitle(`${client.allEmojis.x} Unkown command, try: **${prefix}help**`)]
        // }).then(msg => {setTimeout(()=>{msg.delete().catch((e) => {console.log(String(e).grey)})}, 4000)}).catch((e) => {console.log(String(e).grey)});
	} catch (e) {
    console.log(e)
		return message.channel.send({
			embeds: [new MessageEmbed()
				.setColor(ee.wrongcolor)
				.setTitle(`${client.allEmojis.x} ERROR | An error occurred`)
				.setFooter(ee.footertext, ee.footericon)
				.setDescription(`\`\`\`${e.message}\`\`\``)
			]
		});
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

function escapeRegex(str) {
	try {
		return str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
	} catch {
		return str
	}
}

function onCoolDown(message, command) {
  if (!message || !message.client) throw "No Message with a valid DiscordClient granted as First Parameter";
  if (!command || !command.name) throw "No Command with a valid Name granted as Second Parameter";
  const client = message.client;
  if (!client.cooldowns.has(command.name)) {
    client.cooldowns.set(command.name, new Collection());
  }
  const now = Date.now();
  const timestamps = client.cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown) * 1000;
  if (timestamps.has(message.member.id)) {
    const expirationTime = timestamps.get(message.member.id) + cooldownAmount;
    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return timeLeft
    } else {
      timestamps.set(message.member.id, now);
      setTimeout(() => timestamps.delete(message.member.id), cooldownAmount);
      return false;
    }
  } else {
    timestamps.set(message.member.id, now);
    setTimeout(() => timestamps.delete(message.member.id), cooldownAmount);
    return false;
  }
}