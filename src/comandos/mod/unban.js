module.exports = {
    DESCRIPTION: "Desbanea a un usuario",
    // PERMISSIONS: ["Administrator", "BanMembers"],
    // BOT_PERMISSIONS: ["Administrator", "BanMembers"],
    OWNER: true,
    async execute(client, message, args, prefix) {
      //if (!message.member.hasPermission('BAN_MEMBERS')) {
      //  return message.reply('No tienes permiso para desbanear usuarios.');
      //}
  
      const userId = args[0];
      if (!userId) {
        return message.reply('Debes proporcionar el ID del usuario a desbanear.');
      }
  
      message.guild.fetchBan(userId)
        .then((ban) => {
          message.guild.members.unban(ban.user)
            .then(() => {
              message.reply(`Usuario ${ban.user.tag} desbaneado correctamente.`);
            })
            .catch((error) => {
              message.reply('Ocurrió un error al intentar desbanear al usuario.');
              console.error(error);
            });
        })
        .catch(() => {
          return message.reply('No se encontró ningún usuario baneado con ese ID.');
        });
    }
  }
  