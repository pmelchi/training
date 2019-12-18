const request = require ('request')
const geocode = require ('./utils/geocode')
const forecast = require ('./utils/forecast')

/*
const url = 'https://api.darksky.net/forecast/a7de71a1ff82c94dd69a5bf05a025729/42.0454465,-87.7165309'

request ({url: url, json:true}, (error, response)=> {

    if (error) {
        console.log('Unable to connect to weather service!')
        return
    }

    if (response.body.error) {
        console.log(response.body.error)
        return
    }

    console.log(response.body.daily.data[0].summary)
    const current = response.body.currently
    console.log("it's currently " + current.temperature + " degrees out. There's " + current.precipProbability + "% chance of rain")
})
*/


geocode('Los Angeles', (error, data) => {
    console.log(error)
    console.log(data)
})

forecast(-75.7088, 44.1545, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})