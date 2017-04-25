// Copies .htaccess and meta folder to public folder at the end of the build

'use strict'
const fs = require('fs')
const ncp = require('ncp').ncp
const chalk = require('chalk')

fs.createReadStream('build/.htaccess').pipe(fs.createWriteStream('public/.htaccess'))
ncp('build/meta', 'public/meta', (error) => {
    if (error) {
        console.log('\n  ' + chalk.red.bold('error copying (some) files [.htaccess, meta folder]!'))
    } else {
        console.log('\n  files [.htaccess, meta folder] were copied to public folder')
    }
})

ncp('build/downloads', 'public/downloads', (error) => {
    if (error) {
        console.log('\n  ' + chalk.red.bold('error copying (some) files [downloads]!') +  '\n')
    } else {
        console.log('\n  downloads were copied to public folder\n')
    }
})
