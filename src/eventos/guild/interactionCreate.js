module.exports = async (client, interaction) => {
    if(!interaction.guild || !interaction.channel) return;

    const COMANDO = client.slashCommands.get(interaction?.commandName);

    if(COMANDO) {
        if(COMANDO.OWNER) {
            const DUEÑOS = process.env.OWNER_IDS.split(" ");
            if(!DUEÑOS.includes(interaction.user.id)) return interaction.reply({content: `❌ **Solo los dueños de este bot pueden ejecutar este comando!**\nDueños de Mini-Boo: ${DUEÑOS.map(DUEÑO => `<@${DUEÑO}>`).join(", ")}`})
        }

        if(COMANDO.BOT_PERMISSIONS) {
            if(!interaction.guild.members.me.permissions.has(COMANDO.BOT_PERMISSIONS)) return interaction.reply({content: `❌ **Necessito los siguientes permisos para ejecutar este comando:**\n${COMANDO.BOT_PERMISSIONS.map(PERMISO => `\`${DUEÑO}\``).join(", ")}`})
        }

        if(COMANDO.PERMISSIONS) {
            if(!interaction.member.permissions.has(COMANDO.PERMISSIONS)) return interaction.reply({content: `❌ **Necessitas los siguientes permisos para ejecutar este comando:**\n${COMANDO.BOT_PERMISSIONS.map(PERMISO => `\`${DUEÑO}\``).join(", ")}`})
        }

        try{
            COMANDO.execute(client, interaction, "/");
        } catch(error){
            interaction.reply({content: `**Ha ocurrido un error inesperado!**\n*Contacta con el dueño del bot para reportarlo.*`});
            console.log(error)
        }
    }
}