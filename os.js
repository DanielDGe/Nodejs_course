const os = require('os')

console.log(os.userInfo())
console.log(os.uptime()) //Tiempo desde que se encendio la maquina.
console.log(os.platform()) //Sistema operativo ejecutandose
console.log(os.totalmem()) //Memoria total
console.log(os.freemem()) //Memoria libre

console.table({
    os: os.platform(),
    version: os.version(),
    totalMemory: os.totalmem()
})

