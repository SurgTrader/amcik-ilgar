const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
 
  if(!message.member.permissions.has("MANAGE_MESSAGES")) {
    const ilgarcaliskan = new Discord.MessageEmbed()
    .setDescription("Bu Komutu Kullanabilmek İçin Yeterli Yetkiye Sahip Değilsin !")
    .setColor("BLACK")
    message.channel.send(ilgarcaliskan)
  }
  
  let kullanıcı = message.mentions.members.first()
  
  let warn = await db.fetch(`warn_${message.guild.id}_${kullanıcı.id}`)
  
  let log = db.fetch(`warnlog_${message.guild.id}`)
  
  let sebep = args.slice(1).join(' ')
  
  if(!sebep) {
    const ilgarcaliskans = new Discord.MessageEmbed()
    .setDescription("Bir Sebep Belirtmelisin !")
    .setColor("BLACK")
    message.channel.send(ilgarcaliskans)
  }
  
  await db.add(`warn_${message.guild.id}_${kullanıcı.id}`, 1)
  const realcode = new Discord.MessageEmbed()
  .setTitle("Kullanıcı Uyarıldı !")
  .addField("Uyaran Yetkili", message.author)
  .addField("Uyarılan Kullanıcı", kullanıcı)
  message.channel.send(realcode).then(mesaj => mesaj.delete({timeout: 5000}))
  
  const logmesaj = new Discord.MessageEmbed()
  .setTitle("Bir Kullanıcı Uyarıldı !")
  .addField("Uyaran Yetkili", message.author)
  .addField("Uyarılan Kullanıcı", kullanıcı)
  .addField("Uyarma Sebebi", sebep)
  client.channels.cache.get(log).send(logmesaj)
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["uyar"],
  permlvl: 1 
};

exports.help = {
  name: "warn"
}; 
