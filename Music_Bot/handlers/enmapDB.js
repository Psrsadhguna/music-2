const Enmap = require("enmap");

module.exports = async (client) => {
  client.logger(`Connecting to EnmapDB`.bold.yellow);
  client.settings = new Enmap({
    name: "settings",
    dataDir: "./databases/settings"
  });
  client.logger(`Connected to EnmapDB`.brightGreen);
}

/**
 * @INFO
 * Bot Coded by Zedro#2742 | https://discord.gg/8fYUFxMtAq
 * @INFO
 * Work for Milanio Development | https://discord.gg/8fYUFxMtAq
 * @INFO
 * Please Mention Us Milanio Development, When Using This Code!
 * @INFO
 */