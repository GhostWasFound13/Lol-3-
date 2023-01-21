const {
  EmbedBuilder,
  Collection
} = require("discord.js");


async function succ(channel, message) {
  let em = new EmbedBuilder()
  .setColor("Green")
  .setDescription(`<:tickYes:861611785634054156> | ${message}`)
  
 await channel.send({ embeds: [em] });

}

async function err(channel, message) { 
 let em2 = new EmbedBuilder()
  .setColor("Red")
  .setDescription(`<:tickNo:861612144504078336> | ${message}`)

  await channel.send({ embeds: [em2] })
}

async function em(channel, title, desc) {
  let em3 = new EmbedBuilder()
  .setColor("Green")
  .setTitle(`${title}`)
  .setDescription(`${desc}`)

 await channel.send({ embeds: [em3] })
}

const afk = new Collection()

module.exports = {
  succ, 
  err, 
  afk,
  em,
};