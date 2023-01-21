const { EmbedBuilder } = require("discord.js");
const db = require("../../schema/userbl.js");

module.exports = {
  name: "wl",
  category: "owner",
  description: "whitelist a user",
  args: false,
  usage: "",
  userPerms: [],
  owner: true,
  execute: async (message, args, client, prefix) => {
    
    const id = args[0];
    const user = client.users.fetch(id);
    const reason = args.splice(1).join(" ");
    
    if(!id) return message.reply('you need to provide a user ID to whitelist.');
    if(!user) return message.reply('you need to provide a valid user ID to whitelist.');


    db.findOne({ User: id }, async(err, data) => {
      if (!data) {
        return message.reply("This user is already whitelisted sir.")
      } 
      data.delete({ User: id });
      message.reply("Successfully whitelisted the user.")
      const lmao = new EmbedBuilder()
   .setTitle("New Whitelist")
   .addFields([
    {
      name: "User", value: `<@${id}> (${id})`
    },
    {
      name: "Responsible Moderator", value: `${message.author.tag} (${message.author.id})`
    },
   ])

    client.channels.cache.get('869933911151640576').send({ embeds: [lmao] })
    client.users.fetch(id).then(u => u.send(`Hey chap, you have been whitelisted from Draz Bot by one of our moderators. Congratulations! better not break rules next time!`))
    })
   
   
    }
    
  }