# Array methods

## Foreach Method
The *forEach()* method of **Array** instances executes a provided function once for each array element.
    const array1 = ['a', 'b', 'c'];

    array1.forEach((element) => console.log(element));

    // Expected output: "a"
    // Expected output: "b"
    // Expected output: "c"

**Syntax**</br>

    forEach(callbackFn)
    forEach(callbackFn, thisArg)

**Parameters** </br>

`callbackFn` A Function to execute for each element in the array return value is discarded. The function is called with the following arguments:

- `element` The current element being processed in the array.
- `index` The index of the current element being processed in the array.
- `array` The array *forEach()* was called upon.

`thisArg` (optional) A value to use as `this` when executing **callbackFunction**

**Return value** </br>
None(*undefined*)

## Map method
The *map()* method of **Array** intences creates a new array populated with the result of calling a provided function on every element in the calling array.

    onst array1 = [1, 4, 9, 16];

    // Pass a function to map
    const map1 = array1.map((x) => x * 2);

    console.log(map1);
    // Expected output: Array [2, 8, 18, 32]

**Syntax**</br>

    map(callbackFn)
    map(callbackFn, thisArg)

**Parameters**</br>

`callbackFn` A Function to execute for each element in the array. Its return value is added as a single element in the new array. The function is called with the following arguments:

- `element` The current element being processed in the array.
- `index` The index of the current element being processed in the array.
- `array` The array *forEach()* was called upon.

`thisArg` (optional) A value to use as `this` when executing **callbackFunction**

**Return value** </br>
A new array with each element being the result of the callback function.