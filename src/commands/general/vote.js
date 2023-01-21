
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
  name: "vote",
  category: "Information",
  description: "vote for bot and server",
  args: false,
  usage: "",
  userPerms: [],
  owner: false,
  execute: async (message, args, client, prefix) => {

    const lol = new EmbedBuilder()
    .setTitle("Vote for Scuffed Guard and :label: Scuffed Shop :label:")
    .setColor("Green")
    .setThumbnail("https://images-ext-2.discordapp.net/external/gsJWbP9M7mm_R_GhcnQwlBrwTvSfVkwxCVgfA_BnCQ0/https/cdn.discordapp.com/emojis/982309135494303804.png")
    .setDescription("**Rewards**\n` - ` 1x Count Saver for Scuffed Guard\n` - ` 1x Ticket for Scuffed Guard\n` - ` 1x Count Saver for :label: Scuffed Shop :label:\n` - ` 1x Ticket for :label: Scuffed Shop :label:")
    .setFooter({ text: "Some rewards are exclusive to Scuffed Shop" })
    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel("Scuffed Guard")
          .setStyle(ButtonStyle.Link)
          .setURL(`https://top.gg/bot/781481270726754315/vote?guild=933766783171719279`),
        new ButtonBuilder()
          .setLabel("Scuffed Shop")
          .setStyle(ButtonStyle.Link)
          .setURL("https://top.gg/servers/764710313336897556/vote?guild=933766783171719279")
      );

    message.channel.send({ embeds: [lol], components: [row] })
  }
}