   const Discord = require('discord.js');
exports.run = async (client, message, args) => {

let oylama = args.slice(0).join(" ")
if(!oylama) return message.channel.send("Ne Oylaması Olacak Yazmalısın.")

let Kexpert = new Discord.MessageEmbed()
.setFooter(message.author.tag, message.author.avatarURL())
.setColor("BLACK")
.setTitle(message.guild.name +" Oylama")
.setDescription(`
${oylama}

✅ → Oylamada Evet'i Seçersin.
❌ → Oylamada Hayır'ı Seçersin.
`)
message.channel.send(Kexpert).then(async m => {
await m.react("✅")
await m.react("❌")
})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'oylama',
  description: "Oylama Komutu",
  usage: '<prefix>oylama <oylamayapılcakmesaj>'
}