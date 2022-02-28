const {
  MessageEmbed
} = require('discord.js');
const moment = require("moment");
const filters = require(`../botconfig/filters.json`);
const DisTube = require("distube").default;
const {
    SpotifyPlugin
} = require("@distube/spotify");
const {
    SoundCloudPlugin
} = require("@distube/soundcloud");

module.exports = async (client) => {

  // Console Logger
  client.logger = (data) => {
    // if (!settings[`debug-logs`]) return;
    let logstring = `${String(`M` + `i` + `l` + `a` + `n` + `i` + `o` + ` Logs`).brightGreen}${` | `.grey}${`${moment().format("ddd DD-MM-YYYY HH:mm:ss.SSSS")}`.cyan}${` [::] `.magenta}`
    if (typeof data == "string") {
      console.log(logstring, data.split("\n").map(d => `${d}`.green).join(`\n${logstring} `))
    } else if (typeof data == "object") {
      console.log(logstring, JSON.stringify(data, null, 3).green)
    } else if (typeof data == "boolean") {
      console.log(logstring, String(data).cyan)
    } else {
      console.log(logstring, data)
    }
  };


// Distube   
client.distube = new DisTube(client, {
    emitNewSongOnly: false,
    leaveOnEmpty: true,
    leaveOnFinish: true,
    leaveOnStop: true,
    savePreviousSongs: true,
    emitAddSongWhenCreatingQueue: false,
    //emitAddListWhenCreatingQueue: false,
    searchSongs: 0,
    //youtubeCookie: config.youtubeCookie,
    nsfw: true,
    emptyCooldown: 25,
    ytdlOptions: {
        //requestOptions: {
        //  agent //ONLY USE ONE IF YOU KNOW WHAT YOU DO!
        //},
        highWaterMark: 1024 * 1024 * 64,
        quality: "highestaudio",
        format: "audioonly",
        liveBuffer: 60000,
        dlChunkSize: 1024 * 1024 * 64,
    },
    youtubeDL: false,
    updateYouTubeDL: false,
    customFilters: filters,
    plugins: [
        new SpotifyPlugin({
          parallel: true,
          emitEventsAfterFetching: true,
          api: {
            clientId: process.env.spotify_clientID,
            clientSecret: process.env.spotify_clientSecret,
          },
        }),
        new SoundCloudPlugin()
    ]
});

}