const chalk = require ('chalk')
const yargs = require ('yargs')
const notes = require ('./notes.js');


//Customize yargs
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new note')
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Remove a note')
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function() {
        console.log('List a note')
    }
})


//Create remove command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Read a note')
    }
})


//add, remove, read, list

console.log(yargs.argv)

