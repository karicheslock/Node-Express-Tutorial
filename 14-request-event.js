const http = require('http')

// const server = http.createServer((req, res) => {
//  res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer()
// emits requrest event
// subscribe to it / listen for it / responde to it
server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(5000)