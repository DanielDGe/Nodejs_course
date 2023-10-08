const path = require('path')
console.log(path.sep) // /
console.log(path.join()) //Permite unir directorios o rutas de directorios.

//Convierte laruta en una valida para el sistema en el que estemos.
const filePath = path.join('/public', 'dist', '/styles', 'main.css')

console.log(filePath)

//Este metodo me permite extraer el archivo base de una URL
console.log(path.basename(filePath))

//Devuelve la ruta de los directorios o carpetas sin el archivo
console.log(path.dirname(filePath))

//Devuelve la misma informacion de la ruta de un archivo pero en forma de objeto
console.log(path.parse(filePath))

//Es una alternativa a join, resuelve desde donde esta todo el archivo que se esta ejecutando y le completa la ruta que falta.

console.log(path.resolve('dist'))
