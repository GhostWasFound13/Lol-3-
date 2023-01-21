const { EmbedBuilder } = require("discord.js");
const ms = require("ms")


module.exports = {
  name: "tempban",
  category: "Moderation",
  description: "Ban a naughty user",
  args: false,
  usage: "",
  userPerms: ["BanMembers"],
  aliases: ["tban"],
  owner: false,
  execute: async (message, args, client, prefix) => {

    if(!args[0]) return client.functions.err(message.channel, `You need to provide a user to temp ban.`);

    let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
    const reason = args.slice(2).join(" ") || "None";
    const time = args[1];

    if(!target) return client.functions.err(message.channel, `The target is not in the server.`);

    if(target === message.member) return client.functions.err(message.channel, `Why you want to ban yourself?`);

   if(target.roles.highest.position >= message.member.roles.highest.position) return client.functions.err(message.channel, `You can't ban your seniors.`)

    if(!time) return client.functions.err(message.channel, `Provide a valid time in this way -> **1m, 10h, 2d**`);

    await target.ban({ reason });
   setTimeout(async function () {
      await message.guild.members.unban(target.id)
    }, ms(time))
    client.functions.succ(message.channel, `Succesfully banned ${target.tag} from the server for **${time}** with reason: **${reason}** `);

    
  }
}