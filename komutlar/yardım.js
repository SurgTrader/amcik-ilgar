const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let anancıccd  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('BLACK')
.setTitle(`${client.user.username} - Komutlarım`)
.setDescription(`**\`Genel\`**
» \`${anancıccd}ping\`: **Botun Ping Oranını Gösterir!**
» \`${anancıccd}yaz\`: **istediğiniz Yazıyı Bota Yazdırırsınız!**
» \`${anancıccd}istatistik\`: **Botun İstatistiklerini Söyler!**
» \`${anancıccd}kullanıcı-bilgi\`: **Etiketlediğiniz Üye Hakkında Bilgi Verir!**

**\`Moderasyon Komutları\`**
» \`${anancıccd}nuke\`: **Kanaldaki mesajları komple sıfırlar!**
» \`${anancıccd}forceban\`: **Bir Kullanıcıyı ID'si ile banlarsınız!**
» \`${anancıccd}mute\`: **Üyeyi süreli susturur!**
» \`${anancıccd}kick\`: **Üyeyi sunucudan atar!**
» \`${anancıccd}ban\`: **Seçtiğiniz üyeyi banlarsınız!**
» \`${anancıccd}warn\`: **Seçtiğiniz üyeyi uyarırsınız.**
» \`${anancıccd}uyarılar\`: **Seçtiğiniz üyenin uyarılarına bakarsınız.**
» \`${anancıccd}uyarı-sıfırla\`: **Seçtiğiniz üyenin uyarılarını sıfırlar.**
» \`${anancıccd}kapat\`: **Komutu kullandığınız kanalda yazı yazmayı kapatır.**
» \`${anancıccd}aç\`: **Komutu kullandığınız kanalda yazı yazmayı açar.**
» \`${anancıccd}sil\`: **Kullandığınız kanaldaki mesajları seçtiğiniz sayıda siler.**
» \`${anancıccd}oylama\`: **Komutu kullandığınız kanalda oylama yaparsınız.**


**\`Moderasyon ayarlama\`**
» \`${anancıccd}mute-yetkili ayarla <@rol>\`: **Mute atabilecek yetkili rolü ayarlarsınız.**
» \`${anancıccd}ban-yetkili ayarla <@rol>\`: **Ban atabilecek yetkili rolü ayarlarsınız.**
» \`${anancıccd}kick-yetkili ayarla <@rol>\`: **kick atabilecek yetkili rolü ayarlarsınız.**

**\`Loglu Sistem\`**
» \`${anancıccd}mute-log ayarla <#kanal>\`: **Birisi botu kullanıp mute atarsa loga atar.**
» \`${anancıccd}ban-log ayarla <#kanal>\`: **Birisi botu kullanıp ban atarsa loga atar.**
» \`${anancıccd}kick-log ayarla <#kanal>\`: **Birisi botu kullanıp kick atarsa loga atar.**
 \`${anancıccd}uyarı-log ayarla <#kanal>\`: **Birisi botu kullanıp uyarı atarsa loga atar.**`)

.setThumbnail("https://images-ext-2.discordapp.net/external/OxhR6dHVcOUYc9acE35nC1gA5BQ3BXz3BQHDaZK70AY/%3Fe%3D2147483647%26v%3Dbeta%26t%3DeScEGvgQwVNCNtwvvCQg9VoNXi2ne-eR09YLWRBhXds/https/media-exp1.licdn.com/dms/image/C4D0BAQE4AzVSJGlnHw/company-logo_200_200/0/1519922073184")
.setTimestamp()
.setFooter('By IlgarCaliskan')
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'yardım kodu.',
  usage: 'yardım'
};