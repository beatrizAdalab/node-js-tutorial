const net = require('node:net')

function findAvailablePort (desiredPort) {
  return new Promise((resolve, reject) => {
    // creamos un servidor
    const server = net.createServer()

    /*  se intenta que el servidor escuche en el puerto deseado con server.listen(desiredPort).
    Si el servidor puede escuchar en el puerto (es decir, el puerto está disponible),
    se ejecuta la función de callback, donde se obtiene
    el puerto en el que está escuchando el servidor con server.address().port.
    Luego, se cierra el servidor y se resuelve la promesa con el puerto disponible. */

    server.listen(desiredPort, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })

    // detecto errores
    server.on('error', (err) => {
      // si el puerto ya esta usado retorno el puerto siguiente disponible
      if (err.code === 'EADDRINUSE') {
        findAvailablePort(0).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { findAvailablePort }
