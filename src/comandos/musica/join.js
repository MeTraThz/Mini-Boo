const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = {
    name: 'join',
    description: 'Join a voice channel',
    async execute(client, message, args) {
        const channel = message.member.voice.channel;
        if (!channel) {
            console.log('No estás en un canal de voz.');
            return;
        }

        joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });

        console.log('Me he unido al canal de voz.');
    },
};

