const { joinVoiceChannel, getVoiceConnection } = require('@discordjs/voice');

module.exports = {
    name: 'stop',
    description: 'Stop the current song',
    async execute(client, message, args) {
        const channel = message.member.voice.channel;
        if (!channel) {
            console.log('No estás en un canal de voz.');
            return;
        }

        const guildId = channel.guild.id;
        const connection = getVoiceConnection(guildId);

        if (connection) {
            connection.destroy();
            console.log('La música se ha detenido y he salido del canal.');
            return;
        } else {
            console.log('No estoy en un canal de voz.');
            return;
        }
    },
};

