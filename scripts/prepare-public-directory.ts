/**
 * 1. Load all files from src/public/*.mst
 * 2. Load all env variables
 * 3. Export files to public
 */

import path from 'path'
import fs from 'fs'
import * as Mustache from 'mustache'

const files = ['index.html.mst', 'manifest.json.mst']

// 2.
require('dotenv').config({
  path: path.resolve('../.env'),
})

files.map(file => {
  console.log(`Reading file from: ${file}`)
  const newFileName = file.replace('.mst', '')
  const fileContent = fs.readFileSync(path.resolve(`../src/public/${file}`), {
    encoding: 'utf-8',
  })

  console.log(`Writing file to public/${newFileName}`)
  fs.writeFileSync(
    path.resolve('../public/' + newFileName),
    Mustache.render(fileContent, {
      SITE_NAME: process.env.SITE_NAME,
    }),
    {
      encoding: 'utf-8',
    },
  )
})
