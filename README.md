# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rebeccab/lotide`

**Require it:**

`const _ = require('rebeccab/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: 
Description: Asserts true if the two arrays are equal. Otherwise, it returns false.
Parameters: 
    - `array1` (Array): First array
    - `array2` (Array): Second array
Returns: Prints either assertion passed or assertion failed

* `assertEqual(actual, expected)`: 
Description: Asserts true if the two values are equal. Otherwise, it returns false.
Parameters:
    - `actual` (Array): Primary array
    - `expected` (Array): Inspect array
Returns: Prints either assertion passed or assertion failed

* `assertObjectsEqual(actual, expected)`: 
Description: Asserts true if the two objects are equal. Otherwise, it returns false.
Parameters:
    - `actual` (Object): Primary object
    - `expected` (Object): Inspect object
  Returns: Prints either assertion passed or assertion failed

* `countLetters(phrase)`: 
Description: Within a string, the count of every letter is returned.
Parameters:
    - `phrase` (String): Characters of a string that needs to be counted
Returns: Prints the count of characters in a string

* `countOnly(allItems, itemsToCount)`: 
Description: Specific indexes of an item is taken where the count is returned.
Parameters:
    - `allItems` (Array): Array of items to be counted
    - `itemsToCount` (Object): Specified items to count in the array
Returns: Object that returns the count of the items

* `eqArrays(array1, array2)`: 
Description: Two arrays are compared.
Parameters:
    - `array1` (Array): First array
    - `array2` (Array): Second array
Returns: Prints true or false

* `eqObjects(object1, object2)`: 
Description: Two objects are compared.
Parameters:
    - `object1` (Object): First object
    - `object2` (Object): Second object
Returns: Prints true or false

* `findKey(object, callback)`: 
Description: The first key of the object is returned.
Parameters:
    - `object` (Object): Primary object
    - `callback` (Function): Function to inspect the array
  Returns: Prints the primary key of the object following inspection

* `findKeyByValue(x, y)`: 
Description: Among two objects, the key is examined in order to identify a match.
Parameters:
    - `x` (Object): Primary object
    - `y` (String): To identify a key in the object
Returns: Prints the keys that are identical

* `flatten(list)`: 
Description: A single array is formed by flattening multiple arrays.
Parameters:
    - `list` (Array): Primary list of elements
Returns: Prints a single array

* `head(elements)`: 
Description: In an array, the first item is returned. 
Parameters:
    - `elements` (Array): Primary list
Returns:  Prints the first item in an array

* `index`: 
Description: All functions are listed.

* `letterPositions(phrase)`: 
Description: Within a string in which a letter is present, all incidenences are returned. 
Parameters:
    - `phrase` (String): Primary string of letters
Returns: Prints the amount of times that a string appears

* `map(array, callback)`: 
Description: A new array is generated with results. 
Parameters:
    - `array` (Array): Primary array
    - `callback` (Function): Function with updated results
Returns: Prints ammended array with updated results

* `middle(list)`: 
Description: Middle element of the array is returned. 
Parameters:
    - `list` (Array): Primary array
Returns: Prints the middle item in an array

* `tail(elements)`: 
Description: Every element of the array is returned, except for the first element. 
Parameters:
    - `elements` (Array): Primary array
Returns: Prints every element except for the first element

* `takeUntil(array, callback)`: 
Description: The slice of an array is returned as the elements of the start of an array.
Parameters:
    - `array` (Array): Primary array
    - `callback` (Function): Function of what to exclude from primary array
Returns: Prints a slice of the primary array which excludes the start of the array

* `without(sourceArray, itemsToRemove)`: 
Description: In an array, the elements are removed.
Parameters:
    - `sourceArray` (Array): Primary array
    - `itemsToRemove` (String): Items that need to be removed from the primary array
Returns: Prints an updated array with chosen items removed