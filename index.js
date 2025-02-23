const { AoiClient } = require("aoi.js");

const client = new AoiClient({
    token: "",
    prefix: "$m",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@aoijs/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: "a-32-characters-long-string-here"
    }
});

client.loadCommands("./commands");
require("./handler/error.js")(client);

client.variables({
    ticket: "false",
    ticketID: "",
    isTicket: "false",
    claim: "",
    owner: "",
    category: "1339590280017350687",
    logs: "1338463876869787698",
    staff: "1319611300317364224",
    admin: "1339728998028279889",
    bonus: "0",
    blacklist: "1340737519452553298"
});

client.status({
    name: "Mawten Al Arab",
    type: "STREAMING",
    time: 25,
    url: "https://www.twitch.tv/twitch"
});

client.functionManager.createFunction({
    name: "$transcript",
    type: "djs",
    code: async d => {
      const discordTranscripts = require("discord-html-transcripts");
      const data = d.util.aoiFunc(d);
      const [channel = d.message.channel.id, logchannel = d.message.channel.id] = data.inside.splits;
      let channelid = await d.util.getChannel(d, channel);
      let loggingid = await d.util.getChannel(d, logchannel);
      const attachment = await discordTranscripts.createTranscript(channelid, {
        filename: "transcript.html",
        saveImages: true,
        poweredBy: false,
      });
  
      const f = await loggingid.send({
        files: [attachment],
      });
  
      data.result = f;
      return {
        code: d.util.setCode(data),
      };
    }
  });

client.functionManager.createFunction({
    name: "$transcriptDm",
    type: "djs",
    code: async d => {
      const discordTranscripts = require("discord-html-transcripts");
      const data = d.util.aoiFunc(d);
      const [channel = d.message.channel.id, loguser = d.message.user.id] = data.inside.splits;
      let channelid = await d.util.getChannel(d, channel);
      let userid = await d.util.getUser(d, loguser);
      const attachment = await discordTranscripts.createTranscript(channelid, {
        filename: "transcript.html",
        saveImages: true,
        poweredBy: false,
      });
  
      const f = await userid.send({
        files: [attachment],
      });
  
      data.result = f;
      return {
        code: d.util.setCode(data),
      };
    }
  });