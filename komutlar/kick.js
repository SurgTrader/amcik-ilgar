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
    
      let kickyetkilisi = db.fetch(`kickyetkili_${message.guild.id}`)
  
  if(!message.member.roles.cache.has(kickyetkilisi)) return message.channel.send(new Discord.MessageEmbed().setDescription("Bu Komutu Kullanabilmek İçin Yeterli Yetkiye Sahip Değilsin !").setColor("BLACK"))

    let kullanıcı = message.mentions.members.first();
    let oldu = ayarlar.oldu;
    let log = db.fetch(`kicklog_${message.guild.id}`);

    message.guild.member(kullanıcı).kick();

    const başarılı = new Discord.MessageEmbed() 
      .setTitle("Kullanıcı Kicklendi !")
      .addField("Kicklenen Kullanıcı", kullanıcı) 
      .addField("Kickleyen Yetkili", message.author)
      .setColor(oldu);
    message.channel.send(başarılı);

    const logmesaj = new Discord.MessageEmbed()
      .setTitle("Kick Log !")
      .addField("Kicklenen Kullanıcı", kullanıcı)
      .addField("Kickleyen Yetkili", message.author) 
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
    name: "kick"
  }; 
