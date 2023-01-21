

module.exports = {
    name: "messageCreate",
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @returns 
     */
    run: async (client, message) => {

        
        ["base"].forEach((handler) => {
            require(`../Msg/${handler}`).run(client, message);
          });
    }
}
