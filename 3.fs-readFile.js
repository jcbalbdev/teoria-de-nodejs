//sistema de archivos(files system)
const fs = require('node:fs')
//metodos para leer un fichero de forma sincrona con codificacion utf-8
console.log('leyendo el primer archivo..')
const textUno = fs.readFileSync('./archivo.txt','utf-8')
console.log(textUno)

console.log('haciendo cosas mientras lee el primer archivo')

console.log('leyendo el segundo archivo..')
const textDos = fs.readFileSync('./archivo2.txt','utf-8')
console.log(textDos)