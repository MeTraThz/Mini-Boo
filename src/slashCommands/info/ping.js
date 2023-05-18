const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setDescription("Devuelve la velocidad de red de Mini-Boo"),
    // PERMISSIONS: ["Administrator", "KickMembers", "BanMembers"],
    // BOT_PERMISSIONS: ["Administrator", "KickMembers", "BanMembers"],
    // OWNER: true/false,
    async execute(client, interaction, prefix){
        return interaction.reply(`🏓 Pong! La latencia es de \`${client.ws.ping}ms\``)
    }
}