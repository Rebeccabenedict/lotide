/* The reason why the function below is used is because we want it to establish the equality of both objects. Essentially, if both objects
 are equal, we want the function to return true. If both objects are not equal, we want the function to return false.
*/

const eqArrays = require('./eqArrays');
const eqObjects = function (object1, object2) {
  emptyArray = Object.keys(object1);
  secondEmptyArray = Object.keys(object2);
  if (emptyArray.length !== secondEmptyArray.length) {
    return false;
  } else {
    for (let i in object1) {
      if ((Array.isArray(object1[i]) && Array.isArray(object2[i]))) { 
        if (eqArrays(object1[i], object2[i]) === true) {
          return true
        }
      } else {
        if (object1[i] !== object2[i]) {
          return false;
        }
      }
    }
    return true;
  }
};

/*
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
*/

module.exports = eqObjects;