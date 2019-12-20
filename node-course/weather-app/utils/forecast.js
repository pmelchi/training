const request = require('request')

const forecast = ({latitude, longitude}, callback) => {
    const url = 'https://api.darksky.net/forecast/a7de71a1ff82c94dd69a5bf05a025729/' + latitude + ',' + longitude

    request ({url, json:true}, (error, {body})=> {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
            return
        }

        if (body.error) {
            callback(body.error, undefined)
            return
        }

        const {temperature, precipProbability} = body.currently
        const {summary}  = body.daily.data[0]
        callback(undefined, summary + " it's currently " + temperature + " degrees out. There's " + precipProbability + "% chance of rain")
    })
}

module.exports = forecast