module.exports = client => {
    process.removeAllListeners();

    process.on("unhandledRejection", (reason, p) => {
        console.log('[ANTICRASH] - ERROR ENCONTRADO!');
        console.log(reason, p)
    });

    process.on("uncaughtException", (error, e) => {
        console.log('[ANTICRASH] - ERROR ENCONTRADO!');
        console.log(error, e)
    });

    process.on("uncaughtExceptionMonitor", (err, er) => {
        console.log('[ANTICRASH] - ERROR ENCONTRADO!');
        console.log(err, er)
    });

    process.on("multipleResolves", () => {});
}