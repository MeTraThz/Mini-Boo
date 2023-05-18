module.exports = {
    DESCRIPTION: "Desilencia a un usuario",
    // PERMISSIONS: ["Administrator", "KickMembers", "BanMembers"],
    // BOT_PERMISSIONS: ["Administrator", "KickMembers", "BanMembers"],
    OWNER: true,
    async execute(client, message, args, prefix) {
      //if (!message.member.hasPermission('MUTE_MEMBERS')) {
      //  return message.reply('No tienes permiso para desilenciar usuarios.');
      //}
  
      const member = message.mentions.members.first();
      if (!member) {
        return message.reply('Debes mencionar a un usuario para desilenciar.');
      }
  
      const muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
      if (!muteRole) {
        return message.reply('No se encontró el rol "Muted". Crea un rol con ese nombre y configúralo correctamente.');
      }
  
      if (!member.roles.cache.has(muteRole.id)) {
        return message.reply('El usuario no está silenciado actualmente.');
      }
  
      member.roles.remove(muteRole)
        .then(() => {
          message.reply(`Usuario ${member.user.tag} desilenciado correctamente.`);
        })
        .catch((error) => {
          message.reply('Ocurrió un error al intentar desilenciar al usuario.');
          console.error(error);
        });
    }
  }
  