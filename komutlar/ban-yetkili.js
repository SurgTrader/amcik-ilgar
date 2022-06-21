const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = "../ayarlar.json";

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("BAN_MEMBERS"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          "Bu Komutu Kullanabilmek İçin `Üyeleri Engelle` Yetkisine Sahip Olmalısın !"
        )
        .setColor("BLACK")
    );

  let banyetkili = message.mentions.roles.first();

  if (args[0] === "ayarla") {
    db.set(`banyetkili_${message.guild.id}`, banyetkili.id);
    const ayarlandı = new Discord.MessageEmbed()
      .setDescription(
        `Ban Yetkilisi Rolü Başarıyla ${banyetkili} Olarak Ayarlandı !`
      )
      .setColor(ayarlar.oldu);
    message.channel.send(ayarlandı);
  }

  if (args[0] === "sıfırla") {
    db.delete(`banyetkili_${message.guild.id}`);
    const sıfırlandı = new Discord.MessageEmbed()
      .setDescription(`Ban Yetkilisi Rolü Başarıyla Sıfırlandı !`)
      .setColor(ayarlar.oldu);
    message.channel.send(sıfırlandı)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [""],
  permlvl: 1 
};

exports.help = {
  name: "ban-yetkili" 
}; 