const path = require('path')
const express = require ('express')

const app = express()

app.set('view engine', 'hbs')

const publicDir = path.join(__dirname, '../public')
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
        message: 'This is a help message'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'a bit chilli',
        location: 'Somewhere over the raibow'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})