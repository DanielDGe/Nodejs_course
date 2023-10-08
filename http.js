const { rmSync } = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {
    
    if (req.url === '/') {
        res.write('Welcome to the server')
        return res.end()
    }
    if (req.url === '/about') {
        res.write('acerca de')
        return res.end()
    }

    res.write(`
        <h1>Not found</h1>
        <p>Esta pagina no se encontro en el servidor</p>
        <a href="/">Volver a la pagina principal</a>
    `)
    res.end()

})


server.listen(3000)

console.log('Port listen in port 3000')