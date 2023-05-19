const { getVoiceConnection } = require('@discordjs/voice');

module.exports = {
    name: 'leave',
    description: 'Leave the voice channel',
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
            console.log('He abandonado el canal de voz.');
        } else {
            console.log('No estoy en un canal de voz.');
        }
    },
};
