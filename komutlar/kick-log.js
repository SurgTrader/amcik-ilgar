const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("KICK_MEMBERS"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          "Bu Komutu Kullanabilmek İçin `Üyeleri At` Yetkisine Sahip Olmalısın !"
        )
        .setColor("BLACK")
    );

  let prefix = ayarlar.prefix;

  let kanal = message.mentions.channels.first();

  if (!kanal)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          "Bir Kanal Belirtmelisin ! Örnek; " + prefix + "kick-log ayarla #kanal"
        )
        .setColor("BLACK")
    );

  if (args[0] === "ayarla") {
    db.set(`kicklog_${message.guild.id}`, kanal.id);
    message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          "Kick Log Kanalı Başarıyla " + `${kanal}` + " Olarak Ayarlandı !"
        )
        .setColor("BLACK")
    );
  }

  if (args[0] === "sıfırla") {
    db.delete(`kicklog_${message.guild.id}`);
    message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Kick Log Kanalı Başarıyla Sıfırlandı !")
        .setColor("BLACK")
    );
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permlvl: 1
};

exports.help = {
  name: "kick-log"
};
