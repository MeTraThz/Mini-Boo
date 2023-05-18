module.exports = {
  DESCRIPTION: "Borra los mensajes del canal actual.",
  // PERMISSIONS: [ "Administrator" ],
  async execute(client, message, args, prefix) {
    if (!args[0]) {
      return message.reply("Por favor, proporciona la cantidad de mensajes que deseas eliminar.");
    }

    const amount = parseInt(args[0]);

    if (isNaN(amount)) {
      return message.reply("El argumento debe ser un número.");
    }

    if (amount <= 0 || amount > 100) {
      return message.reply("La cantidad de mensajes a eliminar debe ser mayor que 0 y menor o igual que 100.");
    }

    await message.channel.bulkDelete(amount, true).catch((err) => {
      console.error(err);
      message.channel.send("Ha ocurrido un error al intentar borrar los mensajes.");
    });

    return message.channel.send(`Se han eliminado ${amount} mensajes correctamente.`);
  },
};
