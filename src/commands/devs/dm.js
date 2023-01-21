const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "dm",
  category: "owner",
  description: "dm a user",
  args: false,
  usage: "",
  userPerms: [],
  owner: true,
  execute: async (message, args, client, prefix) => {
      
    const id = args[0];
    const user = client.users.fetch(id);
    const msg = args.splice(1).join(" ");
    
    if(!id) return message.reply('you need to provide a user ID to dm the user.');
    if(!user) return message.reply('you need to provide a valid user ID to dm the user.');
    if(!msg) return message.reply('you must provide a message to dm the user.');
                
    
    client.users.fetch(id).then(u => u.send(`${msg}`))
    //client.users.fetch("854310586418724874").then(u => u.send(`${msg} **This msg was sent to <@${id}> by ${message.author.tag}**`))

    message.channel.send(`Successfully dmed the user.`)

    }
    
  }