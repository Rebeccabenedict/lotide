/* The reason why the function below is used is because we want to use the equality of both arrays in order to establish if the assertion passes or fails. 
The function will return '✅✅✅ Assertion Passed:' if both arrays are equal. However, the function will return 
'❌❌❌ Assertion Failed:' if both arrays are not equal. 
*/

const eqArrays = require('./eqArrays');
const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;