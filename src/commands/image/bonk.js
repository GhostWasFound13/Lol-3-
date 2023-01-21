const { EmbedBuilder } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "bonk",
  category: "Image",
  description: "bonk someone with images",
  args: false,
  usage: "",
  userPerms: [],
  owner: false,
  execute: async (message, args, client) => {

    const user = message.mentions.members.first();
    const channel = message.channel;
    if(!user) return client.functions.err(channel, `You must mention a user to bonk them.`);

    const response = await fetch('https://nekos.best/api/v2/bonk')
    const json = await response.json()

    const embed = new EmbedBuilder()
    .setDescription(`**${user}**, you have been bonked by **${message.author.username}**`)
    .setColor("Green")
    .setImage(`${json.results[0].url}`)

  await message.channel.send({ embeds: [embed]})

  }
}