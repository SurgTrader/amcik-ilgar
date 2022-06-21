const Discord = require("discord.js");
const db = require("quick.db"); 
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_ROLES"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          "Bu Komutu Kullanabilmek İçin `Rolleri Yönet` Yetkisine Sahip Olmalısın !" 
        )
        .setColor("BLACK")
    );

  let logkanal = message.mentions.channels.first();

  if (!logkanal)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Bir Kanal Etiketlemelisin !") 
        .setColor("BLACK")
    );

  if (args[0] === "ayarla") {
    db.set(`mutelog_${message.guild.id}`, logkanal.id);
    const embed = new Discord.MessageEmbed()
      .setDescription(
        `Mute Log Kanalı Başarıyla ${logkanal} Olarak Ayarlandı !`
      )
      .setColor(ayarlar.oldu);
    message.channel.send(embed);
  }

  if (args[0] === "sıfırla") {
    db.delete(`mutelog_${message.guild.id}`);
    const embed1 = new Discord.MessageEmbed()
      .setDescription("Mute Log Kanalı Başarıyla Sıfırlandı !") 
      .setColor(ayarlar.oldu);
    message.channel.send(embed1); 
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [""],
  permlvl: 1 
};

exports.help = {
  name: "mute-log" 
}; 
