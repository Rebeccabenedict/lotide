/* The reason why the function below is used is because we want to use the equality of both items in order to establish if the assertion passes or fails. 
The function will return '✅✅✅ Assertion Passed:' if both items are equal. However, the function will return 
'❌❌❌ Assertion Failed:' if both items are not equal. 
*/

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;