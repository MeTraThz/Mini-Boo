const { joinVoiceChannel, createAudioResource, AudioPlayerStatus, createAudioPlayer } = require('@discordjs/voice');
const ytdl = require('ytdl-core');
const { StreamType } = require('@discordjs/voice');

module.exports = {
    name: 'play',
    description: 'Play a song from YouTube',
    async execute(client, message, args) {
        if (!args.length) {
            console.log('No se proporcionó ninguna URL de YouTube.');
            return;
        }

        const channel = message.member.voice.channel;
        if (!channel) {
            console.log('No estás en un canal de voz.');
            return;
        }

        const connection = joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });

        const stream = ytdl(args[0], { filter: 'audioonly' });
        const resource = createAudioResource(stream, { inputType: StreamType.Arbitrary });
        const player = createAudioPlayer();

        player.play(resource);
        connection.subscribe(player);

        player.on(AudioPlayerStatus.Idle, () => {
            connection.destroy();
        });

        player.on('error', error => {
            console.error(error);
        });
    },
};
