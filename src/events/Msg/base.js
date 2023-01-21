const { 
    EmbedBuilder,
    Message, 
    Client, 
    PermissionsBitField 
    } = require("discord.js");
    const db = require("../../schema/prefix.js")
    const db1 = require("../../schema/userbl.js");
    const db2 = require("../../schema/serverbl.js");
    
    module.exports = {
        name: "base",
        /**
         * 
         * @param {Client} client 
         * @param {Message} message 
         * @returns 
         */
        run: async (client, message) => {
           const blacklisted = db1.findOne({ User: message.author.id }, async (err, data) => {
            if(!data) {
            
            if (message.author.bot) return;
      
            let prefix = client.prefix;
            const ress = await db.findOne({ Guild: message.guildId })
            if (ress && ress.Prefix) prefix = ress.Prefix;
    
            const mention = new RegExp(`^<@!?${client.user.id}>( |)$`);
            if (message.content.match(mention)) {
                const embed = new EmbedBuilder()
                    .setColor(client.embedColor)
                    .setDescription(`**› My prefix in this server is \`${prefix}\`**\n**› You can see my all commands type \`${prefix}\`help**`);
                message.channel.send({ embeds: [embed] })
            };
            const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    
            const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
            if (!prefixRegex.test(message.content)) return;
    
            const [matchedPrefix] = message.content.match(prefixRegex);
    
            const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
            const commandName = args.shift().toLowerCase();
    
            const command = client.commands.get(commandName) ||
                client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
    
            if (!command) return;
    
            if (!message.guild.members.me.permissions.has(PermissionsBitField.resolve('SendMessages'))) return await message.author.dmChannel.send({ content: `I don't have **\`SEND_MESSAGES\`** permission in <#${message.channelId}> to execute this **\`${command.name}\`** command.` }).catch(() => { });
    
            if (!message.guild.members.me.permissions.has(PermissionsBitField.resolve('ViewChannel'))) return;
    
            if (!message.guild.members.me.permissions.has(PermissionsBitField.resolve('EmbedLinks'))) return await message.channel.send({ content: `I don't have **\`EMBED_LINKS\`** permission in <#${message.channelId}> to execute this **\`${command.name}\`** command.` }).catch(() => { });
    
            const embed = new EmbedBuilder()
                .setColor('Red')
            
            
            if(command) {
                const blacklistedsrv = await db2.findOne({ Server: message.guild.id });
                if(blacklistedsrv) return;
            if (command.args && !args.length) {
                let reply = `You didn't provide any arguments, ${message.author}!`;
    
                if (command.usage) {
                    reply += `\nUsage: \`${prefix}${command.name} ${command.usage}\``;
                }
    
                embed.setDescription(reply);
                return message.channel.send({ embeds: [embed] });
            }
    
            if (command.botPerms) {
                if (!message.guild.members.me.permissions.has(PermissionsBitField.resolve(command.botPerms || []))) {
                    embed.setDescription(`I don't have **\`${command.botPerms}\`** permission in <#${message.channelId}> to execute this **\`${command.name}\`** command.`);
                    return message.channel.send({ embeds: [embed] });
                }
            }
            if (command.userPerms) {
                if (!message.member.permissions.has(PermissionsBitField.resolve(command.userPerms || []))) {
                    embed.setDescription(`${client.emoji.cross} | You don't have **\`${command.userPerms}\`** permission in <#${message.channelId}> to execute this **\`${command.name}\`** command.`);
                    return message.channel.send({ embeds: [embed] });
                }
            }
    
           
            let owners = ["854310586418724874", "738162018263236820", "867440358946242571"];
            
            if (command.owner && !owners.includes(message.author.id)) {
                embed.setDescription("Only bot owners can use this command.");
                return message.channel.send({ embeds: [embed] });
            }
            try {
                command.execute(message, args, client, prefix);
            
            } catch (error) {
                console.log(error);
                embed.setDescription("There was an error executing that command.\nI have contacted the owner of the bot to fix it immediately.");
                return message.channel.send({ embeds: [embed] });
            }
        }
          
        } else {
            return;
        }
     })
        }
    }
    