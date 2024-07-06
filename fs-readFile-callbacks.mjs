import fs from 'node:fs'

console.log('leyendo el primer archivo.........')
// const text = fs.readFileSync('./archivo.txt', 'utf-8')  SINCRONO

// ASINCRONO
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
  console.log(text)
})
// console.log(text)

console.log('leyendo el segundo archivo.........')
// const text2 = fs.readFileSync('./archivo2.txt', 'utf-8') SINCRONO
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  console.log(text)
})

// console.log(text2)
