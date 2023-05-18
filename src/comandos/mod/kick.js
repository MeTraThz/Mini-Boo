module.exports = {
    DESCRIPTION: "Expulsa a un usuario",
    // PERMISSIONS: ["Administrator", "KickMembers"],
    // BOT_PERMISSIONS: ["Administrator", "KickMembers"],
    OWNER: true,
    async execute(client, message, args, prefix) {
      //if (!message.member.hasPermission('KICK_MEMBERS')) {
      //  return message.reply('No tienes permiso para expulsar usuarios.');
      //}
  
      const member = message.mentions.members.first();
      if (!member) {
        return message.reply('Debes mencionar a un usuario para expulsar.');
      }
  
      if (!member.kickable) {
        return message.reply('No puedo expulsar a este usuario.');
      }
  
      member.kick()
        .then(() => {
          message.reply(`Usuario ${member.user.tag} expulsado correctamente.`);
        })
        .catch((error) => {
          message.reply('Ocurrió un error al intentar expulsar al usuario.');
          console.error(error);
        });
    }
  }
  