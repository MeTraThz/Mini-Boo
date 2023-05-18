module.exports = {
    DESCRIPTION: "Banea a un usuario",
    // PERMISSIONS: ["Administrator", "BanMembers"],
    // BOT_PERMISSIONS: ["Administrator", "BanMembers"],
    OWNER: true,
    async execute(client, message, args, prefix) {
      //if (!message.member.hasPermission('BAN_MEMBERS')) {
      //  return message.reply('No tienes permiso para banear usuarios.');
      //}
  
      const member = message.mentions.members.first();
      if (!member) {
        return message.reply('Debes mencionar a un usuario para banear.');
      }
  
      if (!member.bannable) {
        return message.reply('No puedo banear a este usuario.');
      }
  
      member.ban()
        .then(() => {
          message.reply(`Usuario ${member.user.tag} baneado correctamente.`);
        })
        .catch((error) => {
          message.reply('Ocurrió un error al intentar banear al usuario.');
          console.error(error);
        });
    }
  }
  