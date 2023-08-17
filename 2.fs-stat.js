//sistema de archivos(files system)
const fs = require('node:fs')
//metodos para saber el estado de un fichero de forma sincrona
const stats = fs.statSync('./archivo.txt')

console.log(
  stats.isFile(),// si es un archivo
  stats.isDirectory(),//si es un directorio
  stats.isSymbolicLink(),//si es un enlace simbolico
  stats.size // tamaño del archivo en bytes
)