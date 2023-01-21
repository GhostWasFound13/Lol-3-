const { EmbedBuilder } = require("discord.js");
const rgx = /^(?:<@!?)?(\d+)>?$/

module.exports = {
  name: "unban",
  category: "Moderation",
  description: "unban a naughty user",
  args: false,
  usage: "",
  userPerms: ["BanMembers"],
  aliases: ["unbannish"],
  owner: false,
  execute: async (message, args, client, prefix) => {

    const id = args[0];
    if(!rgx.test(id)) return client.functions.err(message.channel, `Please provide a valid user ID.`);

    const Users = await message.guild.bans.fetch();
    const target = Users.get(id).user;
    if(!target) return client.functions.err(message.channel, `Not a previously banned user.`)
    const reason = args.slice(1).join(" ") || "None";

    await message.guild.members.unban(target, reason)
    client.functions.succ(message.channel, `Done, user has been unbanned.`)
    
  }
}