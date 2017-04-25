// Removes public folder before build

'use strict'
const rimraf = require('rimraf')
const chalk = require('chalk')

rimraf('public', [], () => {
    console.log('\n  public folder and content removed succesfully..\n')
})
