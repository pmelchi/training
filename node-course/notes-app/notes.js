const fs = require('fs')

const getNotes = function() {
    return 'my Notes'
}

const addNote = function(title, body) {
    const notes = loadNotes()
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
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

module.exports = {
    getNotes: getNotes,
    addNote : addNote
}