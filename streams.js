const { writeFile } = require('fs/promises')
const { createReadStream } = require('fs')

/* const createbigfile = async () => {
    await writeFile('./data/bigfile.txt', 'hello world'.repeat(10000))
}

createbigfile() */

const stream = createReadStream('./data/bigfile.txt', {
    encoding: 'utf-8'
})

//Chunk son porciones de datos
stream.on('data', (chunk) => {
    console.log(chunk)
})

stream.on('end', () => {
    console.log('Archivo terminado de leer')
})

stream.on('error', (error) => {
    console.log(error)
})