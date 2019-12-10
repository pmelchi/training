/*eslint-disable semi */
const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'my Notes'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {

        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen("Note was saved"))
    } else {
        console.log(chalk.bgRed("Repeated note, not saved"))
    }

}

const saveNotes = (notes) => {
    const strJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', strJson)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }

}

const removeNote = (title) => {
    const notes = loadNotes()

    const notes2Save = notes.filter((note) => note.title !==  title )

    if (notes.length === notes2Save.length) {
        console.log(chalk.bgRed('Note not found'))
    } else {
        saveNotes(notes2Save)
        console.log(chalk.bgGreen('Note removed'))
    }

}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.yellow('Your notes'))
    notes.forEach((note) => console.log(note.title))
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.bgRed('Note not found'))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote : addNote,
    removeNote: removeNote,
    listNotes : listNotes,
    readNote : readNote
}