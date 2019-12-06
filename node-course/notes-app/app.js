const chalk = require ('chalk')
const yargs = require ('yargs')
const notes = require ('./notes.js');


//Customize yargs
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption:true,
            type:'string'
        }, 
        body: {
            describe: 'Body of the node',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title)
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
yargs.parse()

