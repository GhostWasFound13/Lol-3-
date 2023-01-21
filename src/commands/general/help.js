const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, SelectMenuOptionBuilder } = require("discord.js");

module.exports = {
    name: "help",
    category: "Information",
    aliases: [ "h" ],
    description: "Help with all commands, or one specific command.",
    args: false,
    usage: "",
    userPerms: [],
    owner: false,
 execute: async (message, args, client, prefix) => {
    if(!args[0]) {
  const option1 = new SelectMenuOptionBuilder()
    .setDescription("Home embed with client info")
    .setEmoji(`<:dr_globe:859299240978022401>`)
    .setValue("home")
    .setLabel(`Home`)

    const option2 = new SelectMenuOptionBuilder()
    .setDescription("Fun Commands")
    .setEmoji(`<:WOW:767604318739103775>`)
    .setValue("fun")
    .setLabel(`Fun`)

    const option3 = new SelectMenuOptionBuilder()
    .setDescription("Utility commands")
    .setEmoji(`🛠️`)
    .setValue("utils")
    .setLabel(`Utility`)

    const option4 = new SelectMenuOptionBuilder()
    .setDescription("Donation commands")
    .setEmoji(`<:Lotterycoin:779257389802586132>`)
    .setValue("dono")
    .setLabel(`Donations`)
    
    const option5 = new SelectMenuOptionBuilder()
    .setDescription("Karuta commands")
    .setEmoji(`<:dr_02smug:859822726675824710>`)
    .setValue("karuta")
    .setLabel(`Karuta`)

    const option6 = new SelectMenuOptionBuilder()
    .setDescription("Moderation commands")
    .setEmoji(`<:emoji_6:975254162617012274>`)
    .setValue("mod")
    .setLabel(`Moderation`)

    const option7 = new SelectMenuOptionBuilder()
    .setDescription("Survey commands")
    .setEmoji(`🗒️`)
    .setValue("survey")
    .setLabel(`Surveys`)

    const menu = new SelectMenuBuilder()
    .setCustomId("help")
    .setMaxValues(1)
    .setMinValues(1)
    .setPlaceholder("Select categories here")
    .setOptions(option1, option2, option3, option4, option5, option6, option7);

    const home = new EmbedBuilder()
    .setTitle(`${client.user.username} Help`)
    .setDescription(`Hey**<@${message.author.id}>**, I'm <@${client.user.id}>!\n\nA perfect client to manage your server with ease and i got a lot of features including managements of other clients such as Dank memer, Bro client and Karuta!`)
    .addFields([
        {
            name: "Categories -", value: "`` - `` Fun\n`` - `` Utility\n`` - ``Donations\n`` - `` Karuta\n`` - `` Survey\nThese are just main categories we got many sub categories in the main ones, get started by selecting the categories."
        },
    ])
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp()
    .setFooter({text: `Try [p]help <command> for more information.`, iconURL: message.author.displayAvatarURL({ dynamic: true })})

    let sendmsg = await message.channel.send({ embeds: [home], components: [new ActionRowBuilder().addComponents(menu)] });
    const iFilter = i => {
        if (i.user.id !== message.author.id) {
        i.reply({ content: "These menus aren't for you!", ephemeral: true});
        return false;
        }
       return true;
    }

    const collector = await sendmsg.createMessageComponentCollector({
        ComponentType: "SELECT_MENU", filter: iFilter, time: 120000
      })
     
      
      collector.on("collect",async (collected) => {
        await collected.deferUpdate();
        const value = collected.values[0];
if(value === "home") {
  sendmsg.edit({ embeds: [home], components: [new ActionRowBuilder().addComponents(menu)] })
} else if(value === "fun") {
    const yomama = new EmbedBuilder()
    .setTitle("Fun Commands")
    .setDescription("> **Games**\n`counting, guessthenumber, aki, bubblewrap`\n> **Scuffed Special**\n`blackjack, slots, eroll, inventory, gift`\n> **Role Play**\n`highfive, cuddle, hug, bully, kiss, poke, tickle, bonk, nom, pat, kick, yeet, slap`\n> **Info**\n`vote, help, invite, ping, credits`")
    .setThumbnail("https://images-ext-2.discordapp.net/external/4iT2vKMaxADjpMQ59veYS79PActt4nZYMFo1hP1MA0o/https/cdn.discordapp.com/avatars/781481270726754315/ed4689b899801cad15833b36a49f5c48.webp")
    .setColor("Green")

    sendmsg.edit({ embeds: [yomama], components: [new ActionRowBuilder().addComponents(menu)] })
} else if(value === "utils") {
    const hi = new EmbedBuilder()
    .setTitle(`Utility Commands`)
    .setDescription("> **Server**\n`get_ids, guildinfo, lock, steal, timestamp, unlock, plset, joinpingset, lconfig, role`\n> **User**\n`remind, timer, whois, notes, selfrole`\n> **Embeds**\n`add_embed, remove_embed, use_embed`\n> **Suggestions**\n`suggest, suggestion`\n> **Reaction Roles**\n`reaction_add, reaction_remove, reactions`\n> **Afk**\n`afk, list, remove_afk, reset_afk`")
    .setThumbnail("https://images-ext-2.discordapp.net/external/G4Zy6fWmtvz2f2x6qHeW5WSyQiSxTEbCxTw41HLdhCo/https/www.amcomputers.org/wp-content/uploads/2018/04/Treiber_Icon.png")
    .setColor("Green")

    sendmsg.edit({ embeds: [hi], components: [new ActionRowBuilder().addComponents(menu)] })
} else if(value === "dono") {
    const hii = new EmbedBuilder()
    .setTitle(`Donation Management Commands`)
    .setDescription("> **Dank bank**\n`dadd, dcheck, dlb, dremove, dreset, dstaff`\n> **Cash bank**\n`cadd, ccheck, cremove, creset, cstaff`\n> **Bro bank**\n`brobank`\n> **Karuta**\n`karuta`")
    .setColor("Green")
    .setThumbnail("https://images-ext-1.discordapp.net/external/inLQX6j_9BZWvDbIBTka9IB_lzTdE1RShut0EG7yKXI/https/static.vecteezy.com/system/resources/previews/004/327/957/original/donation-box-throwing-coin-in-a-box-for-donations-donate-giving-money-and-love-concept-of-charity-give-and-share-your-love-with-people-vector.jpg?width=606&height=606")

    sendmsg.edit({ embeds: [hii], components: [new ActionRowBuilder().addComponents(menu)] })
} else if(value === "karuta") {
    const hiii = new EmbedBuilder()
    .setTitle(`Karuta Commands`)
    .setDescription("> **Node queue**\n`add_queue, channel_setup, edit_button, node, node_allow, node_button, node_channel_ping, node_drop, node_edit, node_embed, node_manager, node_note, node_request, node_tax, node_trusted, nodeinfo, remove_queue, view_queue`\n> **Premium Only**\n`inactive, karuta_premium, ping_setting`")
    .setColor("Green")
    .setThumbnail("https://images-ext-1.discordapp.net/external/WOuzsMBdG9bbTpbDwgfYhZaJdbv7OviqvkfuQACiuVw/https/i.pinimg.com/474x/2a/4b/57/2a4b5701928e0c76845f061fb6489fbe.jpg")

    sendmsg.edit({ embeds: [hiii], components: [new ActionRowBuilder().addComponents(menu)] })
} else if(value === "survey") {
    const sur = new EmbedBuilder()
    .setTitle(`Surveys Management Commands`)
    .setDescription("> **Voting**\n`mcq, vot`\n> **Forms**\n`form, submit`")
    .setThumbnail("https://images-ext-2.discordapp.net/external/87jMkMScy5c8Bo8pQMAyTgrTv2IFmFnpA6HPJgUgDlM/http/www.formpl.us/blog/image_serve/business-survey-template")
    .setColor("Green")

    sendmsg.edit({ embeds: [sur], components: [new ActionRowBuilder().addComponents(menu)] })
}
      })
     
      collector.on("end", async i => {
        sendmsg.edit({ components: [new ActionRowBuilder().addComponents(menu.setDisabled(true))]})
      })
    } else {

    let command = client.commands.get(args[0]);
    
    const embed = new EmbedBuilder()
    embed.setDescription(`
    ** Command -** \`${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}\`\n
    ** Description -** \`${command.description || "No Description provided."}\`\n
    ** Usage -** [   \`${command.usage ? `${command.usage}` : "No Usage"}\`   ]\n
    ** Examples -** \`${command.example ? `${command.example}` : "No Examples Found"}\`\n
    ** Aliases -** [ \`${command.aliases ? command.aliases.join(" , ") : "None."}\` ]`)

    const yes = new EmbedBuilder()
    .setTitle(`${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)} Help`)
    .setDescription(`\`\`\`xml\n hi [test] \`\`\` help`)

    message.channel.send({ embeds: [yes] })
    }
   }
 }
