const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = "../ayarlar.json";

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("KICK_MEMBERS"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          "Bu Komutu Kullanabilmek İçin `Üyeleri At` Yetkisine Sahip Olmalısın !"
        )
        .setColor("BLACK")
    );

  let kickyetkili = message.mentions.roles.first();

  if (args[0] === "ayarla") {
    db.set(`kickyetkili_${message.guild.id}`, kickyetkili.id);
    const ayarlandı = new Discord.MessageEmbed()
      .setDescription(
        `Kick Yetkilisi Rolü Başarıyla ${kickyetkili} Olarak Ayarlandı !`
      )
      .setColor(ayarlar.oldu);
    message.channel.send(ayarlandı);
  }

  if (args[0] === "sıfırla") {
    db.delete(`kickyetkili_${message.guild.id}`);
    const sıfırlandı = new Discord.MessageEmbed()
      .setDescription(`Kick Yetkilisi Rolü Başarıyla Sıfırlandı !`)
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
  name: "kick-yetkili" 
}; 
