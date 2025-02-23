module.exports = client => {
    process.on('unhandledRejection', (reason, p) => {
        console.error(' [antiCrash] :: Unhandled Rejection/Catch');
        console.error('Reason:', reason);
        console.error('Promise:', p);
    });

    process.on('uncaughtException', (err, origin) => {
        console.error(' [antiCrash] :: Uncaught Exception/Catch');
        console.error('Error:', err);
        console.error('Origin:', origin);
    });

    process.on('uncaughtExceptionMonitor', (err, origin) => {
        console.error(' [antiCrash] :: Uncaught Exception/Catch (MONITOR)');
        console.error('Error:', err);
        console.error('Origin:', origin);
    });
};