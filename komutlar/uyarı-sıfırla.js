const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
  if(!message.member.permissions.has("MANAGE_MESSAGES")) {
    const anancımısınamq = new Discord.MessageEmbed()
    .setDescription("Bu Komutu Kullanabilmek İçin Yeterli Yetkin Bulunmuyor !")
    .setColor("BLACK")
    message.channel.send(hehehaw)
  }
  
  let kullanıcı = message.mentions.members.first()
  
  let log = db.fetch(`warnlog_${message.guild.id}`)
  
  if(!kullanıcı) {
    const qwea = new Discord.MessageEmbed()
    .setDescription("Bir Kullanıcı Etiketlemen Gerekli !")
    .setColor("BLACK")
    message.chnanel.send(qwea)
  }
  
  db.delete(`warn_${message.guild.id}_${kullanıcı.id}`)
  const ilgardiyobune = new Discord.MessageEmbed()
  .setDescription(`Başarıyla ${kullanıcı} Adlı Kullanıcının Uyarılarını Sıfırladım !`)
  .setColor("BLACK")
  message.channel.send(ilgardiyobune)
  
  const hehehaw = new Discord.MessageEmbed()
  .setDescription(`${kullanıcı} Adlı Kullanıcının Uyarıları ${message.author} Tarafından Sıfırlandı !`)
  .setColor("BLACK")
  client.channels.cache.get(log).send(hehehaw)
  
  
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permlvl: 1 
};

exports.help = {
  name: "uyarı-sıfırla"
};
