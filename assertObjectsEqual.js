/* The reason why the function below is used is because we want to use the equality of both objects in order to establish if the assertion passes or fails. 
The function will return '✅✅✅ Assertion Passed:' if both objects are equal. However, the function will return 
'❌❌❌ Assertion Failed:' if both objects are not equal. 
*/

const eqObjects = require('./eqObjects');
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)){
      console.log(`✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}.`)
  }
  else {
      console.log(` ❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}.`);

  }

};

module.exports = assertObjectsEqual;