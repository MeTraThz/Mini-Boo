module.exports = {
    DESCRIPTION: "Silencia a un usuario",
    // PERMISSIONS: ["Administrator", "KickMembers", "BanMembers"],
    // BOT_PERMISSIONS: ["Administrator", "KickMembers", "BanMembers"],
    OWNER: true,
    async execute(client, message, args, prefix) {
      //if (!message.member.hasPermission('MUTE_MEMBERS')) {
      //  return message.reply('No tienes permiso para silenciar usuarios.');
      //}
  
      const member = message.mentions.members.first();
      if (!member) {
        return message.reply('Debes mencionar a un usuario para silenciar.');
      }
  
      if (!member.manageable) {
        return message.reply('No puedo silenciar a este usuario.');
      }
  
      const muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
      if (!muteRole) {
        return message.reply('No se encontró el rol "Muted". Crea un rol con ese nombre y configúralo correctamente.');
      }
  
      member.roles.add(muteRole)
        .then(() => {
          message.reply(`Usuario ${member.user.tag} silenciado correctamente.`);
        })
        .catch((error) => {
          message.reply('Ocurrió un error al intentar silenciar al usuario.');
          console.error(error);
        });
    }
  }
  