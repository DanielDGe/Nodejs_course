const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (data) => {
    console.log(data)
})

customEmitter.emit('response', 'Helloworld')
customEmitter.emit('response', 24)
customEmitter.emit('response', [1, 2, 3])
customEmitter.emit('response', {name: "charles"})


