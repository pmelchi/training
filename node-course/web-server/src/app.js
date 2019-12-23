const path = require('path')
const express = require ('express')
const hbs = require ('hbs')

const app = express()

//Define paths for express config
const publicDir = path.join(__dirname, '../public')
const viewsDir = path.join(__dirname, '../templates/views')
const partialsDir = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and view location
app.set('view engine', 'hbs')
app.set('views', viewsDir)
hbs.registerPartials(partialsDir)

//Setup static folder to server
app.use(express.static(publicDir))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'TheGuy'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'TheGuy'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'This is a help message',
        title: 'Help',
        name: 'TheGuy'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'a bit chilli',
        location: 'Somewhere over the raibow'
    })
})

app.get('/help/*', (req, res) => {
    res.send('Help article not found')
})

app.get('*', (req, res) => {
    res.send('You got nothing here')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})