//Puede exportar string, number, array, objects.

const myWebAddress = "faztweb.com"
const myNumber = 30
const myArray = [10, 20, 30];
const myUser = {
    name: 'Ryan',
    lastname: 'ray'
}

//Multiples
/*module.exports = {
    myWebAddress,
    myNumber,
    myArray
}*/

//Individuales
module.exports.myUser = myUser

console.log(module)