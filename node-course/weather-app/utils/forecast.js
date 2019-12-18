const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a7de71a1ff82c94dd69a5bf05a025729/42.0454465,-87.7165309'

    request ({url: url, json:true}, (error, response)=> {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
            return
        }

        if (response.body.error) {
            callback(response.body.error, undefined)
            return
        }

        console.log(response.body.daily.data[0].summary)
        const current = response.body.currently
        callback(undefined, "it's currently " + current.temperature + " degrees out. There's " + current.precipProbability + "% chance of rain")
    })
}

module.exports = forecast