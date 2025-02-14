const glob = require('glob')
const fs = require('fs')
const chokidar = require('chokidar')

const regenerate = () => {
  glob('./snippets/snippets/**/*.ts', (_: any, files: readonly string[]) => {
    const result = files
      .map(file => {
        const contents = fs.readFileSync(file, 'utf8')
        return `export const ${file
          .replace(/\.\/snippets\/snippets\/\w+\//, '')
          .replace(/\.ts/, '')} = \`${contents.trim()}\``
      })
      .join('\n\n')

    fs.writeFile('./src/lib/snippets.ts', `${result}\n`, (err: any) => {
      if (err) {
        throw err
      }
      console.log('snippets generated')
    })
  })
}

regenerate()
chokidar.watch('./snippets/snippets/**/*.ts').on('change', () => {
  regenerate()
})
