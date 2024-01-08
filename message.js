
const { EmbedBuilder } = require('discord.js')

module.exports = {
name: 'messageCreate',
async execute(client, message, ) {
            
if (message.author.bot) return
if (message.channel.type == "DM") return;

if(message.content.match(`^<@!?${client.user.id}>( |)$`)) {
const préfixe = new EmbedBuilder()
.setTitle(`**Tu as besoin de moi ?** Salut ${message.author.tag}`)
.setDescription(`Bonjour, je suis **AlarBot** un robot discord multifoncions:
Moderations, Verfi-Pub, Utilitaire, est plus en core.
- Mon prefix est **a!**
Mon Discord Suppot [Cliquez ICI]()
Pour Majoute sur ton server [Cliquez ICI](https://discord.com/oauth2/authorize?client_id=1134254238109814864&permissions=8&scope=bot)
Pour voir ma documentations [Cliquez ICI](https://github.com/doc-alarbot/)`)
.setColor(client.config.couleurs.defaut)
message.reply({ embeds: [préfixe] })
}

const args = message.content.slice(client.config.prefix.length).trim().split(' ')
const commandName = args.shift().toLowerCase();
const command = client.commands.get(commandName)

if (!message.content.startsWith(client.config.prefix) || message.author.bot) return;
if (!command) return
console.log(`[Logs-Command] La commande "${commandName}" à été exécuté par ${message.author.tag}`)
            
try {
command.run(message, args, client)
} catch (error) {
message.channel.send(`> **❌ Je suis désolée mais il y à eu une erreur durant l'execution du code de AlarBot créé par georges_5_off.**`)
};

}}
