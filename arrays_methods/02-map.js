// forEach
const numbers = [2, 3, 4, 5]
numbers.forEach((item, index, arr) => {
    arr[index] = item * item
})

console.log(numbers)

// map
const numbers2 = [4, 9, 16, 25]
const newNumbers2 = numbers2.map(Math.sqrt)

console.log(newNumbers2)

const num = [1, 2, 3, 4]
const newNum = num.map(myFunction)

function myFunction(item) {
    return item * 10
}

console.log(newNum)

const person = [
    {firstname: "Malcom", lastname: "Reynolds"},
    {firstname: "Kaylee", lastname: "Frye"},
    {firstname: "Jayne", lastname: "Cobb"}
]

const completeName = person.map(getFullName)

function getFullName(item) {
    return [item.firstname, item.lastname].join(" ")
}

console.log(completeName)