const request = require ('request')
const geocode = require ('./utils/geocode')
const forecast = require ('./utils/forecast')


if (process.argv.length !== 3) {
    console.log('No location was provided')
    return
}
const location = process.argv[2]

geocode(location, (error, data) => {
    if (error) {
        return console.log(error)
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)
    })
})