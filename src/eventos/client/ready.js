module.exports = client => {
    if(client?.application?.commands){
        client.application.commands.set(client.slashArray);
        console.log(`(/) ${client.slashCommands.size} Comandos publicados!`.yellow);
    };
    console.log(`Sesión iniciada como ${client.user.tag}`.magenta);

}