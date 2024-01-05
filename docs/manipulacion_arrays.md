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

    const array1 = [1, 4, 9, 16];

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
- `array` The array *map()* was called upon.

`thisArg` (optional) A value to use as `this` when executing **callbackFunction**

**Return value** </br>
A new array with each element being the result of the callback function.

**Description**</br>
- *map()* creates a new array form calling a function for every array element.
- *map()* does not execute the function for empty elements.
- *map()* does not change the original array.

## Filter method
the *filter()* method of **Array** instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

    const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

    const result = words.filter((word) => word.length > 6);

    console.log(result);
    // Expected output: Array ["exuberant", "destruction", "present"]
    

**Syntax**</br>

    map(callbackFn)
    map(callbackFn, thisArg)

**Parameters**</br>

`callbackFn` A Function to execute for each element in the array. It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise. The function is called with de following arguments:

- `element` The current element being processed in the array.
- `index` The index of the current element being processed in the array.
- `array` The array *filter()* was called upon.

`thisArg` (optional) A value to use as `this` when executing **callbackFunction**

**Return value** </br>
A *shallow copy* of the given array containing just the elements that pass the test. If no elements pass the test, an empty array is returned.

**Description**</br>
- *filter()* method creates a new array filled with elements that pass a ***test provided***.
- *filter()* method does not execute the function for empty elements.
- *filter()* method does not change the original array.