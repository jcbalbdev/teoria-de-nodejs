import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os';

console.log('informacion del sistema operativo')
console.log('_________________________________')
console.log('nombre del sistema operativo : ',platform())
console.log('version del sistema operativo : ', release())
console.log('arquitectura : ', arch())
console.log('CPUs(nucleos) : ', cpus())//<-- vamos a poder escalar procesos en 
console.log('memoria libre : ',freemem()/1024/1024)// memoria libre en mb
console.log('memoria total : ', totalmem()/1024/1024)
console.log('uptime : ',uptime()/60/60) // cuantos dias lleva tu ordenador encendido