const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setDescription("Elimina un número de mensajes del canal.")
    .addNumberOption(options => options
        .setName("amount")
        .setDescription("El número de mensajes a eliminar.")
        .setMinValue(1)
        .setMaxValue(100)
        .setRequired(true)
        ),

    async execute(client, interaction) {
    
        const amount = interaction.options.getNumber("amount");

        if (amount <= 0 || amount > 100) {
            return interaction.reply("La cantidad de mensajes a eliminar debe ser mayor que 0 y menor o igual que 100.");
          }
      
          await interaction.channel.bulkDelete(amount, true).catch((err) => {
            console.error(err);
            interaction.channel.send("Ha ocurrido un error al intentar borrar los mensajes.");
          });
      
          return interaction.channel.send(`Se han eliminado ${amount} mensajes correctamente.`);      
    },
};
        
