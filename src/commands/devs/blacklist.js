const { EmbedBuilder } = require("discord.js");
const db = require("../../schema/userbl.js");

module.exports = {
  name: "bl",
  category: "owner",
  description: "blacklist a user",
  args: false,
  usage: "",
  userPerms: [],
  owner: true,
  execute: async (message, args, client) => {
    
    const id = args[0];
    const user = client.users.fetch(id);
    const reason = args.splice(1).join(" ");
    
    if(!id) return message.reply('you need to provide a user ID to blacklist.');
    if(!user) return message.reply('you need to provide a valid user ID to blacklist.');
    if(!reason) return message.reply('you must provide a reason to blacklist the user.');


    db.findOne({ User: id, Reason: reason }, async(err, data) => {
      if (data) {
        return message.reply("This user is already blacklisted sir.");
      } else new db({
        User: id,
        Reason: reason,
      }).save();
      message.reply("Successfully Blacklisted the user.")
      const lmao = new EmbedBuilder()
   .setTitle("New Blacklist")
   .addFields([
    {
      name: "User", value: `<@${id}> (${id})`
    },
    {
      name: "Reason", value: `${reason}`
    },
    {
      name: "Responsible Moderator", value: `${message.author.tag} (${message.author.id})`
    },
   ])

 }) 
    client.channels.cache.get('869933911151640576').send({ embeds: [lmao] })
    client.users.fetch(id).then(u => u.send(`Hey chap, you have been blacklisted from using Scuffed Guard by one of our moderators. You have been blacklisted for **${reason}**, If you think this is a mistake please join our support server to appeal. https://discord.gg/R9DrymMnrz`))
    }
   
   
}