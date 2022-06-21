const Discord = require('discord.js');


exports.run = (client, message, params) => {
     
            message.channel.send(new Discord.MessageEmbed().setColor('#000000').setTitle('RealModeration').setDescription('Yapımcım').setFooter('IlgarCaliskan#1337'))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yapımcım"],
  permLevel: 0,
  kategori: "mod"
};


exports.help = {
  name: 'yapımcım',
  description: 'RealModereation',
  usage: 'yapımcım'
};