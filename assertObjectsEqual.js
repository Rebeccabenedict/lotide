const eqObjects = function (object1, object2) {
  emptyArray = Object.keys(object1);
  secondEmptyArray = Object.keys(object2);
  if (emptyArray.length !== secondEmptyArray.length) {
    return false;
  } 
  else {
    for (let i in object1) {
      if ((Array.isArray(object1[i]) && Array.isArray(object2[i]))) { 
        if (eqArrays(object1[i], object2[i]) === true) {
          return true
        }
      } 
      else {
        if (object1[i] !== object2[i]) {
          return false;
        }
      }
    }
    return true;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)){
      console.log(`✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}.`)
  }
  else {
      console.log(` ❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}.`);

  }

};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log(assertObjectsEqual(shirtObject , anotherShirtObject)); 