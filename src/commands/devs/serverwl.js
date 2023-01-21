const { EmbedBuilder } = require("discord.js");
const db = require("../../schema/serverbl.js");

module.exports = {
  name: "swl",
  category: "owner",
  description: "whitelist a guild",
  args: false,
  usage: "",
  userPerms: [],
  owner: true,
  execute: async (message, args, client, prefix) => {
    
    const id = args[0];
    
    if(!id) return message.reply('you need to provide a user ID to whitelist.');

    db.findOne({ Server: id }, async(err, data) => {
      if (!data) {
        return message.reply("This Guild is already whitelisted sir.")
      } 
      data.delete({ Server: id });
      message.reply("Successfully whitelisted the Guild.")
    })
   
   
    }
    
  }