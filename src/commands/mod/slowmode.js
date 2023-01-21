
module.exports = {
    name: "slowmode",
    category: "Moderation",
    description: "adds slowmode a channel",
    args: false,
    usage: "",
    userPerms: ["ManageChannels"],
    owner: false,
    execute: async (message, args, client, prefix) => {
  
        const amount = parseInt(args[0]);
          if (isNaN(amount))
            return client.functions.err(message.channel, "It doesn't seem to be valid number");
        if (args[0] === amount + "s") {
          message.channel.setRateLimitPerUser(amount);
          if (amount > 1) {
            client.functions.succ(message.channel, "slowmode is now " + amount + " seconds");
            return;
          } else {
            client.functions.succ(message.channel, "slowmode is now " + amount + " second");
            return;
          }
        }
        if (args[0] === amount + "min") {
          message.channel.setRateLimitPerUser(amount * 60);
          if (amount > 1) {
            client.functions.succ(message.channel, "slowmode is now " + amount + " minutes");
            return;
          } else {
            client.functions.succ(message.channel, "slowmode is now " + amount + " minute");
    
            return;
          }
        }
        if (args[0] === amount + "h") {
          message.channel.setRateLimitPerUser(amount * 60 * 60);
          if (amount > 1) {
            client.functions.succ(message.channel, "slowmode is now " + amount + " hours");
            return;
          } else {
            client.functions.succ(message.channel, "slowmode is now " + amount + " hour");
            return;
          }
        } else {
          client.functions.err(message.channel, "You can only set seconds(s), minutes(min) and hours(h)");
        }

        
      
    }
  }