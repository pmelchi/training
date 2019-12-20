const name = 'Andrew'
const userAge = 31

const user = {
    name,
    age: userAge,
    location: 'Chicago'
}

console.log(user)

const product = {
    label: 'Notebook',
    price: 3,
    stock: 300,
    salePrice: undefined
}

const {label:productLabel = 'Default', stock, rating = 5} = product

console.log(productLabel)
console.log(stock)
console.log(rating)

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('Order', product)