const { EmbedBuilder, ChannelType, AttachmentBuilder } = require("discord.js");
const schema = require("../../schema/messagelogs.js");

module.exports = {
  name: "messagelogs",
  category: "Moderation",
  description: "set messagelogs for the server",
  args: false,
  aliases: ["ml"], 
  usage: "",
  userPerms: ["ManageGuild"],
  owner: false,
  execute: async (message, args, client, prefix) => {

    if(!args[0]) return client.functions.em(message.channel, `Message Logging`, "Usage: [p]ml add #channel\n**add**: adds a channels for message logs.\n**remove**: removes and disables message logging.") 
    const arg = args.shift().toLowerCase();
    let channel = message.mentions.channels.first();

    if(arg === "add") {

      if(!channel) return message.reply("Please mention a valid text channel.");

      schema.findOne({ Guild: message.guild.id }, async (err, data) => {
        if(data) data.delete();
          new schema({
            Guild: message.guild.id,
            Channel: channel.id,
          }).save();
          message.reply(`Message logs has been set to <#${channel.id}>`)
      })

    } else if(arg === "remove") {
      schema.findOne({ Guild: message.guild.id }, async (err, data) => {
        if(data) {
        data.delete();
        message.reply("Successfully disabled messagelogs for the server.")
        console.log(err);
        }
      })
    }
   
  }
}