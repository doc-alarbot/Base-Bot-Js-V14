const { ActivityType } = require("discord.js")

module.exports = {
name: 'ready',
once: true,
async execute(client) {

console.log(`[Server] Le bot ${client.user.tag} a etait démarrer avec succée.`)

client.user.setPresence({
activities: [{ name: client.config.status.message, type: ActivityType.Watching }]
});

}}
