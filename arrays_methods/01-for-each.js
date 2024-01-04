const letters = ['a', 'b', 'c', 'd']

// Normal for iteration
for (let i = 0; i < letters.length; i++) {
    const element = letters[i]
    console.log(element)
}

// Foreach iteration
// array.foreach(myFunction)
// array.foreach(function(currentValue, index, arr), thisValue)
letters.forEach(item => {console.log(item)})
letters.forEach((element, index, array) => {
    console.log(element)
    console.log(index)
    console.log(array)
})

const numbers = [65, 44, 12,4]
numbers.forEach(myFunction)

function myFunction(item, index, arr) {
    arr[index] = item * 10
}

console.log(numbers)