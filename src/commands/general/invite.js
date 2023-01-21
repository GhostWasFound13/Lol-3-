const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
  name: "invite",
  category: "Information",
  aliases: ["addme"],
  description: "Get the bot's invite link.",
  args: false,
  usage: "",
  userPerms: [],
  owner: false,
  execute: async (message, args, client, prefix) => {

    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel("Invite")
          .setStyle(ButtonStyle.Link)
          .setURL(`https://discord.com/api/oauth2/authorize?client_id=781481270726754315&permissions=8&scope=bot%20applications.commands`),
        new ButtonBuilder()
          .setLabel("Support")
          .setStyle(ButtonStyle.Link)
          .setURL("https://discord.gg/R9DrymMnrz"),
          new ButtonBuilder()
          .setLabel("Official Server")
          .setStyle(ButtonStyle.Link)
          .setURL("https://discord.gg/scuffedshop")
      );

    const mainPage = new EmbedBuilder()
      .setAuthor({ name: 'Scuffed Guard', iconURL: 'https://media.discordapp.net/attachments/893416058919190549/1043889517721047050/guard.png?width=606&height=606' })
      .setThumbnail('https://media.discordapp.net/attachments/893416058919190549/1043889517721047050/guard.png?width=606&height=606')
      .setColor(0x303236)
      .addFields([{ name: 'Invite Scuffed Guard', value: `[Here](https://discord.com/api/oauth2/authorize?client_id=781481270726754315&permissions=8&scope=bot%20applications.commands)` }])
    message.reply({ embeds: [mainPage], components: [row] })
  }
}
