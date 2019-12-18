const request = require('request')

const geocode = (address, callback) => {
    const urlMapbox = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoicG1lbGNoaSIsImEiOiJjazQ5MWN3MXgwMG5pM2xreWZwZHJxODVnIn0.QIj66QJCz6NHu9UZD-vTiA"
    request({url: urlMapbox, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to map service', undefined)
            return
        }

        if (response.body.features.length === 0) {
            callback('No results found', undefined)
            return
        }
        const center = response.body.features[0].center
        callback(undefined, {
            latitude: center[1],
            longitude: center[0],
            location: response.body.features[0].place_name
        })
    })
}

module.exports = geocode