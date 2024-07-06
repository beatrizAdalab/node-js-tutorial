import fs from 'node:fs/promises'

Promise.all([
  fs.readFile('./archivo.txt', 'utf-8'),
  fs.readFile('./archivo2.txt', 'utf-8')
]).then(([text, text2]) => {
  console.log('leyendo el primer archivo.........')
  console.log(text)
  console.log('leyendo el segundo archivo.........')
  console.log(text2)
})
