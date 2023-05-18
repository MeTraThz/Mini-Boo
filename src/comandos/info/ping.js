module.exports = {
    DESCRIPTION: "Devuelve la velocidad de red de Mini-Boo",
    // PERMISSIONS: ["Administrator", "KickMembers", "BanMembers"],
    // BOT_PERMISSIONS: ["Administrator", "KickMembers", "BanMembers"],
    OWNER: true,
    async execute(client, message, args, prefix){
        return message.reply(`🏓 Pong! La latencia es de \`${client.ws.ping}ms\``)
    }
}