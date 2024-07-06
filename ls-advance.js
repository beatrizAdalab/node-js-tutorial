const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

// recoge el segundo argumento, por lo que podemos pasarle cualquier carpeta: node ls-advance.js cjs
const folder = process.argv[2] ?? '.'

async function ls (folder) {
  let files
  try {
    // readdir devuelve una lista de los nombres de los archivos en el directorio proporcionado.
    files = await fs.readdir(folder)
  } catch {
    console.error(pc.red(`❌ No se pudo leer el directorio ${folder}`))
    process.exit(1)
  }

  // Por cada archivo
  const filesPromises = files.map(async file => {
    // consigo el path completo
    const filePath = path.join(folder, file)

    let stats

    try {
      stats = await fs.stat(filePath) // status - información del archivo
    } catch {
      console.error(`No se pudo leer el archivo ${filePath}`)
      process.exit(1)
    }

    // extraigo la informacion que quiera que esta ya en stats
    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size.toString()
    const fileModified = stats.mtime.toLocaleString()

    return `${pc.bgMagenta(fileType)} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize.padStart(10))} ${pc.yellow(fileModified)}`
  })

  // espera a que se completen todas las promesas creadas por files.map
  const filesInfo = await Promise.all(filesPromises)

  filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)
