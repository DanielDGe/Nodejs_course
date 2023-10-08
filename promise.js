const { readFile } = require('fs')

//With callback, codigo asincrono dificil de leer.
/* readFile('./data/first.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data)
}) */


//With promise, espera que se ejecute un codigo despues de cierto tiempo, codigo asincrono.

const getText = (pathFile) => {

    return new Promise(function (resolve, reject) {
        readFile(pathFile, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}

//Esto es mas facil de entender y mantenible que los callbacks
/* getText('./data/first.txt')
    .then((result) => {
        console.log(result)
    })
    .then(() => getText('./data/second.txt'))
    .then(result => console.log(result))
    .catch(error => console.log(error))
    */


//With Async/Await
async function read() {

    try {
        const result = await getText('./data/first.txt')
        const result2 = await getText('./data/second.txt')
        console.log(result)
        console.log(result2)
    } catch (error) {
        console.log(error)
    }
}

read()