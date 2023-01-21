const { prefix } = require("../../config.js");
const { ActivityType } = require("discord.js");

module.exports ={
name: "ready",
run: async (client) => {
    client.logger.log(`${client.user.username} online!`, "ready");
    client.logger.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} users`, "ready");

    //Game
    client.user.setPresence({
activities: [{ name: 'sus man', type: ActivityType.Watching }],
status: 'dnd',
})
 }
}
