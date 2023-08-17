const os = require('node:os');

console.log('informacion del sistema operativo')
console.log('_________________________________')
console.log('nombre del sistema operativo : ',os.platform())
console.log('version del sistema operativo : ', os.release())
console.log('arquitectura : ', os.arch())
console.log('CPUs(nucleos) : ', os.cpus())//<-- vamos a poder escalar procesos en 
console.log('memoria libre : ',os.freemem()/1024/1024)// memoria libre en mb
console.log('memoria total : ', os.totalmem()/1024/1024)
console.log('uptime : ',os.uptime()/60/60) // cuantos dias lleva tu ordenador encendido