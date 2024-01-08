const { EmbedBuilder } = require('discord.js')


module.exports = {
name: 'Embed1',
run: async (message, args, client) => {


const help = new EmbedBuilder()
.setColor(client.config.couleurs.defaut)
.setTitle(`TITRE-EMBED`)
.setURL(`https://github.com/georgesdev-off/`)
.setDescription('MESSAGES-EMBED')

return message.channel.send({ embeds: [help] })
    }}