const fs = require('fs') //File system


//Leyendo archivos

const first = fs.readFileSync('./data/first.txt') //Devuelve un buffer tipo de dato crudo sin conversion o interpretacion.

console.log(first)

const firstConvertido = fs.readFileSync('./data/first.txt', 'utf-8') 

console.log(firstConvertido)


const second = fs.readFileSync('./data/second.txt')
console.log(second.toString()) //Convertido


//Creando archivos

let title = 'este es el contenido del archivo'
fs.writeFileSync('./data/third.txt', title) //Con esta configuracion sobreescribe el archivo

let contenido = 'este es el contenido se ha añadido'

fs.writeFileSync('./data/fourth.txt', contenido, {
    flag: 'a'
}) //Este lo añade flag 'a' de append


//Codigo Asyncrono, con callbacks antiguos.
fs.readFile('./data/first.txt', 'utf-8', (error, data) => {
    
    if (error) {
        console.log(error)
    }
    console.log(data)

    fs.readFile('./data/second.txt', 'utf-8', (error, data) => {
    
        if (error) {
            console.log(error)
        }
        console.log(data)

        fs.writeFile('./data/newFile.txt', 'Archivo creado desde Fs', (error, data) => {
    
            if (error) {
                console.log(error)
            }
            console.log(data)
        
        })
    
    })

})