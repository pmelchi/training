const fs = require("fs")

/*const book = {
//    title: "Dias de soledad",
    author: "Myself"
}

const bookJSON = JSON.stringify(book)

console.log(bookJSON)

const parsedData = JSON.parse(bookJSON)

console.log(parsedData.author)

fs.writeFileSync("1-json.json", bookJSON)
*/

const dataBuffer = fs.readFileSync('1-json.json')
const strJson = dataBuffer.toString()
const objJson = JSON.parse(strJson)

objJson.name ='Pablo'
objJson.age = 39

const str2File = JSON.stringify(objJson)
fs.writeFileSync('1-json.json',str2File)



