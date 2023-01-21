const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
  name: "credits",
  category: "Information",
  description: "check the person who created me",
  args: false,
  usage: "",
  userPerms: [],
  owner: false,
  execute: async (message, args, client, prefix) => {

    const lol = new EmbedBuilder()
    .setColor("Green")
    .setThumbnail(message.client.user.displayAvatarURL())
    .setTitle('Scuffed Guard Development Team')
    .setDescription('My team is working very hard to provide best features for you guys, please support us and invite me to your server. If you already added me then thank you kind sir!')
    .addFields([
      {
        name: 'Owners', value: 'Shadowz#0007'
      },
      {
       name: 'Bot Developers', value: 'Shadowz#3150, AdiGro#0999, KaYEET#0001, Mixel༭#7819'
      },
      {
        name: "Web Developer", value: "Shadowz#3150"
      },
    ])

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


    message.channel.send({ embeds: [lol], components: [row] })

  }
}