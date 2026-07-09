import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const certsDir = path.join(__dirname, '../src/certifications')
const EAGER = new Set(['clf-c02', 'aif-c01', 'react-study', 'openjs-node'])

function toCamelCase(id) {
  return id
    .split('-')
    .map((part, i) => (i === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)))
    .join('')
}

for (const dir of fs.readdirSync(certsDir)) {
  if (EAGER.has(dir)) continue

  const indexPath = path.join(certsDir, dir, 'index.ts')
  if (!fs.existsSync(indexPath)) continue

  const content = fs.readFileSync(indexPath, 'utf8')
  const exportMatch = content.match(/export const (\w+): CertificationConfig = \{/)
  if (!exportMatch) {
    console.warn(`Skip ${dir}: no export found`)
    continue
  }

  const exportName = exportMatch[1]
  const metaName = exportName.replace(/Config$/, 'Meta')
  const start = content.indexOf(exportMatch[0]) + exportMatch[0].length
  const cardsIdx = content.indexOf('\n  cards,', start)
  if (cardsIdx === -1) {
    console.warn(`Skip ${dir}: no cards field found`)
    continue
  }

  const metaBody = content.slice(start, cardsIdx).trimEnd()
  const metaPath = path.join(certsDir, dir, 'meta.ts')

  const metaFile = `import type { CertificationMeta } from '../types'

export const ${metaName}: CertificationMeta = {
${metaBody}
  cardCount: 190,
}
`

  fs.writeFileSync(metaPath, metaFile)

  const cardImports = content.slice(0, content.indexOf('const cards ='))
  const cardsBlock = content.slice(
    content.indexOf('const cards ='),
    content.indexOf(exportMatch[0]),
  )

  const newIndex = `${cardImports}import { ${metaName} } from './meta'

${cardsBlock}export const ${exportName}: CertificationConfig = {
  ...${metaName},
  cards,
}
`

  fs.writeFileSync(indexPath, newIndex)
  console.log(`Updated ${dir}`)
}
