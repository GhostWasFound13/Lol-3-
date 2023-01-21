const { EmbedBuilder } = require("discord.js");
const schema = require("../../schema/messagelogs.js")

module.exports = {
  name: "messageUpdate", 
  run: async(client, oldMessage, newMessage) => {

   schema.findOne({ Guild: oldMessage.guild.id }, async(err, data) => {
      if(!data) return;
        const channel = data.Channel;
       const embed = new EmbedBuilder()
    .setTitle("Message Log")
    .setDescription(`Before: **${oldMessage}**\nAfter: **${newMessage}**\nSent By: ${oldMessage.author}\nChannel: ${oldMessage.channel}`)
     .setThumbnail(`${oldMessage.author.displayAvatarURL()}`)
    .setFooter({ text:"ScuffedGuard logs", url: `${client.user.displayAvatarURL()}` })
    client.channels.cache.get(channel).send({ embeds: [embed] })
    }) 
  }

}