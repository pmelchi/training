const request = require('request')

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoicG1lbGNoaSIsImEiOiJjazQ5MWN3MXgwMG5pM2xreWZwZHJxODVnIn0.QIj66QJCz6NHu9UZD-vTiA"
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to map service', undefined)
            return
        }

        if (body.features.length === 0) {
            callback('No results found', undefined)
            return
        }
        const {center} = body.features[0]
        callback(undefined, {
            latitude: center[1],
            longitude: center[0],
            location: body.features[0].place_name
        })
    })
}

module.exports = geocode