const { findAvailablePort } = require('./free-port.js')
const http = require('node:http')

const desiredPort = process.env.PORT ?? 3000

// Un servidor recibe rq y envia res
const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola Mundo')
})

// Escucha del servidor
findAvailablePort(desiredPort).then(port => {
  server.listen(3000, () => {
    console.log(`server is listening on port ${port}`)
  })
})
