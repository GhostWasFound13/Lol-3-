const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ping",
  category: "Information",
  description: "Displays the bot's ping.",
  args: false,
  usage: "",
  userPerms: [],
  aliases: ["hi"],
  owner: false,
  execute: async (message, args, client, prefix) => {

    await message.channel.send({ content: `Pong! ${client.ws.ping}ms` });
  }
}