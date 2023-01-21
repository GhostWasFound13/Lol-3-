const { EmbedBuilder } = require("discord.js");
const db = require("../../schema/serverbl.js");

module.exports = {
  name: "sbl",
  category: "owner",
  description: "blacklist a server",
  args: false,
  usage: "",
  userPerms: [],
  owner: true,
  execute: async (message, args, client) => {
    
    const id = args[0];
    const srvid = client.guilds.cache.get(id);
    const reason = args.splice(1).join(" ");
    
    if(!id) return message.reply('you need to provide a Guild ID to blacklist.');
    if(!reason) return message.reply('you must provide a reason to blacklist the user.');


    db.findOne({ Server: id, Reason: reason }, async(err, data) => {
      if (data) {
        return message.reply("This server is already blacklisted.");
      } else new db({
        Server: id,
        Reason: reason,
      }).save();
      message.reply("Successfully Blacklisted the Guild.")

 })
    }
   
   
}