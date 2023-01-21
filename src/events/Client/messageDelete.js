const { EmbedBuilder } = require("discord.js");
const schema = require("../../schema/messagelogs.js")

module.exports = {
  name: "messageDelete", 
  run: async(client, message) => {

   schema.findOne({ Guild: message.guild.id }, async(err, data) => {
      if(!data) return;
        const channel = data.Channel;
       const embed = new EmbedBuilder()
    .setTitle("Message Log")
    .setDescription(`Deleted Message: **${message}**\nSent By: ${message.author}\nChannel: ${message.channel}`)
     .setThumbnail(`${message.author.displayAvatarURL()}`)
    .setFooter({ text:"ScuffedGuard logs", url: `${client.user.displayAvatarURL()}` })
    client.channels.cache.get(channel).send({ embeds: [embed] })
    }) 
  }

}