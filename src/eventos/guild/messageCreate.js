module.exports = async (client, message) => {
    if(!message.guild || !message.channel || message.author.bot) return;

    if(!message.content.startsWith(process.env.PREFIX)) return;

    const ARGS = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
    const data = ARGS?.shift()?.toLowerCase();

    const COMANDO = client.commands.get(data);// || client.commamnds.find(c => c.ALIASES && c.ALIASES.includes(data));
    
    if(COMANDO) {
        if(COMANDO.OWNER) {
            const DUEÑOS = process.env.OWNER_IDS.split(" ");
            if(!DUEÑOS.includes(message.author.id)) return message.reply({content: `❌ **Solo los dueños de este bot pueden ejecutar este comando!**\nDueños de Mini-Boo: ${DUEÑOS.map(DUEÑO => `<@${DUEÑO}>`).join(", ")}`})
        }

        if(COMANDO.BOT_PERMISSIONS) {
            if(!message.guild.members.me.permissions.has(COMANDO.BOT_PERMISSIONS)) return message.reply({content: `❌ **Necessito los siguientes permisos para ejecutar este comando:**\n${COMANDO.BOT_PERMISSIONS.map(PERMISO => `\`${PERMISO}\``).join(", ")}`})
        }

        if(COMANDO.PERMISSIONS) {
            if(!message.member.permissions.has(COMANDO.PERMISSIONS)) return message.reply({content: `❌ **Necessitas los siguientes permisos para ejecutar este comando:**\n${COMANDO.PERMISSIONS.map(PERMISO => `\`${PERMISO}\``).join(", ")}`})
        }

        try{
            COMANDO.execute(client, message, ARGS, process.env.PREFIX);
        } catch(error){
            message.reply({content: `**Ha ocurrido un error inesperado!**\n*Contacta con el dueño del bot para reportarlo.*`});
            console.log(error);
            return;
        }
    }
}