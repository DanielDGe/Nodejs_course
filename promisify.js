const { readFile } = require('fs/promises') //Otra opcion
const { promisify } = require('util')

//Elabora el codigo con el callback, podemos tener multiples soluciones para llegar a un codigo mas optimo.
//const readFilepromise = promisify(readFile)

async function read() {

    try {
        const result = await readFile('./data/first.txt', 'utf-8')
        const result2 = await readFile('./data/second.txt', 'utf-8')
        console.log(result)
        console.log(result2)
    } catch (error) {
        console.log(error)
    }
}

read()