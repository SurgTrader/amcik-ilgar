const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
  if(!message.member.permissions.has("MANAGE_MESSAGES")) {
    const realcodes = new Discord.MessageEmbed()
    .setDescription("Bu Komutu Kullanabilmek İçin Yeterli Yetkin Bulunmuyor !")
    .setColor("BLACK")
    message.channel.send(realcodes)
  }
  
  let kullanıcı = message.mentions.members.first() || message.author
  
  let uyarılar = db.fetch(`warn_${message.guild.id}_${kullanıcı.id}`)
  
  if(uyarılar == null) uyarılar = 0
  
  const uyarılarınişteaq = new Discord.MessageEmbed()
  .setTitle("Uyarılar !")
  .setDescription(`
${kullanıcı} Adlı Kullanıcının Uyarıları; 
**${uyarılar}**`)
  .setColor("BLACK")
  message.channel.send(uyarılarınişteaq)
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlvl: 1 
};

exports.help = {
  name: "uyarılar"
}; 
