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

    filter(callbackFn)
    filter(callbackFn, thisArg)

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

## Reduce method
the *reduce()* method of **Array** instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value. </br>

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

    const array1 = [1, 2, 3, 4];

    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
    );

    console.log(sumWithInitial);
    // Expected output: 10
    

**Syntax**</br>

    reduce(callbackFn)
    reduce(callbackFn, initialValue)

**Parameters**</br>

`callbackFn` A Function to execute for each element in the array. Its return value becomes the value of the *accumulator* parameter on the next invocation of *callbackFn*. For the last invocation, the return value becomes the return value of **reduce()**. The function is called with the following arguments

- `accumulator` The value resulting from the previous call to *callbackFn*. On the first call, its value is *initialValue* if the latter is specified; otherwise its valus is *array[0]*.
- `currentValue` The value of the current element. On the first call, its value is *array[0]* if *initialValue* is specified; otherwise its value is *array[1]*.
- `currentIndex` The index position of *currentValue* in the array. On the first call, its value is *0* if *initialValue* is specified, otherwise *1*.
- `array` The array *reduce()* was called upon.


`initialValue` (optional) A value to which *accumulator* is initialized the first time the callback is called. If *initialValue* is specified, *callbackFn* starts executing with the first value in the array as *currentValue*. If *initialValue* is not specified, *accumulator* is initialized to the first value in the array, and *callbackFn* starts executing with the second value in the array as *currentValue*. In this case, if the array is empty (so that there's no first value to return as *accumulator*), an error is thrown.

**Return value** </br>
The value that results from running the "reducer" callback function to completion over the entire array.

**Description**</br>
- *reduce()* method executes a reducer funciton for array element.
- *reduce()* method returns a single value: the function's accumulated result.
- *reduce()* method does not execute the function for empty array elements.
- *reduce()* method does not change the original array.