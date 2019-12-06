/*eslint-disable semi */
const fs = require('fs')

const getNotes = function() {
    return 'my Notes'
}

const addNote = function(title, body) {
    const notes = loadNotes()
    
    const duplicateNotes = notes.filter(function(note) {
        return note.title ===  title
    })
    
    if (duplicateNotes.length === 0) {

        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("Note was saved")
    } else {
        console.log("Repeated note, not saved")
    }

}

const saveNotes = function(notes) {
    const strJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', strJson)
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }

}

const removeNote = function(title) {
    const notes = loadNotes()
    
    const notes2Save = notes.filter(function(note) {
        return note.title !==  title
    })
    
    if (notes.length === notes2Save.length) {
        console.log('Nothing to change')
    } else {
        saveNotes(notes2Save)
        console.log('Notes were updated')
    }

}

module.exports = {
    getNotes: getNotes,
    addNote : addNote,
    removeNote: removeNote
}