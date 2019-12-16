const request = require ('request')

const url = 'https://api.darksky.net/forecast/a7de71a1ff82c94dd69a5bf05a025729/37.8267,-122.4233'

request ({url: url}, (error, response)=> {
    const data = JSON.parse(response.body)

    console.log(data)
})