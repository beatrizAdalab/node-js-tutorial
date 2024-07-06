const path = require('node:path')

// unir rutas con path.join
// NO PERMITIDO POR EL SISTEMA OPERATIVO'./content/subfolder/text.txt'

// Unix las barras son /
// Windows las barras son \

// chequearlo en tu sistema operativo
console.log(path.sep)

// UNIR RUTAS

const filePath = path.join('content', 'subfolder', 'text.txt')
console.log(filePath)

// DEVOLVER ULTIMO NOMBRE
const base = path.basename('/foo/bar/baz/asdf/quux.html') // Devuelve: 'quux.html'
const base2 = path.basename('/foo/bar/baz/asdf/quux.html', '.html') // Devuelve: 'quux'

console.log(base)
console.log(base2)

// DEVOLVER EXTENSION DE LA RUTA
const extName = path.extname('index.html') // Devuelve: '.html'

// DEVOLVER DIRECTORIO PADRE
const dirname = path.dirname('/foo/bar/baz/asdf/quux') // Devuelve: '/foo/bar/baz/asdf'

console.log(extName)
console.log(dirname)
