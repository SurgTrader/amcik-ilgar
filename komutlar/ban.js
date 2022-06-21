const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = "../ayarlar.json"; 

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("BAN_MEMBERS")) 
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          "Bu Komutu Kullanabilmek İçin `Üyeleri Yasakla` Yetkisine Sahip Olmalısın !" 
        )
        .setColor("BLACK")
    );

  let banyetkilisi = db.fetch(`banyetkili_${message.guild.id}`)
  
  if(!message.member.roles.cache.has(banyetkilisi)) return message.channel.send(new Discord.MessageEmbed().setDescription("Bu Komutu Kullanabilmek İçin Yeterli Yetkiye Sahip Değilsin !").setColor("RANDOM"))
  
  
  let kullanıcı = message.mentions.members.first();
  let oldu = ayarlar.oldu;
  let log = db.fetch(`banlog_${message.guild.id}`);

  message.guild.member(kullanıcı).ban();
  
  const başarılı = new Discord.MessageEmbed() 
    .setTitle("Kullanıcı Yasaklandı !")
    .addField("Yasaklanan Kullanıcı", kullanıcı) 
    .addField("Yasaklayan Yetkili", message.author)
    .setColor(oldu);
  message.channel.send(başarılı);

  const logmesaj = new Discord.MessageEmbed()
    .setTitle("Ban Log !")
    .addField("Yasaklanan Kullanıcı", kullanıcı)
    .addField("Yasaklayan Yetkili", message.author) 
    .setColor(oldu);
  client.channels.cache.get(log).send(logmesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permlvl: 1
};

exports.help = {
  name: "ban"
}; 
