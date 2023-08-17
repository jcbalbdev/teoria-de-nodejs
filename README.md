# NODE JS

En **node js** nunca tendremos todo nuestro codigo en un solo fichero por eso lo vamos a separar en diferentes ficheros utilizando el **patron de diseño modulo** *(separa el codigo en diferentes ficheros que se pueden importar o exportar para que los diferentes codigos se utilizen)*
>La variable global en nodejs es globalThis , que es el objeto global de donde sale global, window y los demas objetos de javascript

## SISTEMAS DE MODULOS

### CommonJS (./cjs)
> #### Forma comun(CommonJS) de exportar e importar/requerir un fichero 
> **expotar** :
  ```javascript
      modules.exports = {nombredelobjeto:funcion()}
  ```
> **importar** : 
  ```javascript
      const {nombredelobjeto} = requiere('./fichero')
  ```

### ES Modules (./mjs)
> #### Forma moderna(ES Modules) y recomendada de exportar e importar/requerir un fichero 
> **expotar** : 
  ```javascript
    export function name(algo){console.log(algo)}
  ```
> **importar** :
  ```javascript
    import {name} from './fichero'
  ```

>**Nota**
>en msj se puede convetir require a import poniendo encima de los tres puntos (...) y presionando CRTL + .

## MODULOS NATIVOS


**La Forma moderna de escribir modulos nativos es** : 
  ```javascript
    const nombre_del_modulo_nativo = require('node:nombre_del_modulo_nativo')
  ```


> ### Modulo os
> Es un modulo que nos da informacion de nuestro sistema operativo
  ```javascript
    const os = require('node:os');

console.log('informacion del sistema operativo')
console.log('_________________________________')

console.log('nombre del sistema operativo : ',os.platform())

console.log('version del sistema operativo : ', os.release())

console.log('arquitectura : ', os.arch())

console.log('CPUs(nucleos) : ', os.cpus())//<-- vamos a poder escalar procesos en Node

console.log('memoria libre : ',os.freemem()/1024/1024)// memoria libre en mb

console.log('memoria total : ', os.totalmem()/1024/1024)

console.log('uptime : ',os.uptime()/60/60) // cuantos dias lleva tu ordenador encendido

  ```


> ### Modulo fs (files system)
> Es uno de los modulos nativos mas utilizados en Node 
>
  ```javascript
    const fs = require('node:fs');
  ```

> #### metodos para saber el estado de un fichero de forma sincrona
> 
  ```javascript
    const stats = fs.statSync('./archivo.txt')
    console.log(stats.isFile(),/*si es un archivo*/ stats.isDirectory(),/*si es un directorio*/ stats.isSymbolicLink(),/*si es un enlace simbolico*/ stats.size // tamaño del archivo en bytes)
  ```

  #### metodos para leer un fichero de forma sincrona con codificacion utf-8
  ```javascript
      console.log('leyendo el primer archivo..')
      const textUno = fs.readFileSync('./archivo.txt','utf-8')
      console.log(textUno)

      console.log('leyendo el segundo archivo..')
      const textDos = fs.readFileSync('./archivo2.txt','utf-8')
      console.log(textDos)
  ```

  

