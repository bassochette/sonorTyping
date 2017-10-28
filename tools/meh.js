
const randomIndexInArray = (array) => Math.floor(Math.random()*array.length)

const randomItemInArray = (array) => array[randomIndexInArray(array)]

module.exports = {
    randomItemInArray,
    randomIndexInArray
}
