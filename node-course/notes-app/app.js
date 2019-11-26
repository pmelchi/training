const chalk = require ('chalk')
const notes = require ('./notes.js');

const command = process.argv[2]

console.log(process.argv)

if (command === 'add') {
    console.log('cmd: add')
} else if (command === 'remove') {
    console.log('cmd: remove')
}