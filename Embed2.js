const { EmbedBuilder } = require('discord.js')
const Discord = require("discord.js");

module.exports = {
name: "embed2",
run: async (message, args, client) => {
  
     
const embed = new EmbedBuilder()
.setThumbnail(client.user.displayAvatarURL())
.setTitle(`Titre`)
.setURL(`https://github.com/georgesdev-off`)
.setColor(client.config.couleurs.defaut)
.addFields(
{
name: 'titre',
value: `messages`,
inline: false
},
{
name: 'titre',
value: `messages`,
inline: false
}
)
.setTimestamp()
message.channel.send({ embeds: [embed] })
    }
}
