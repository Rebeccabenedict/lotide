/* The reason why the function below is used is because we want it to establish the equality of both arrays. Essentially, if both arrays
 are equal, we want the function to return true. If both arrays are not equal, we want the function to return false.
*/

const eqArrays = function(array1, array2) {
  for (let x = 0; x < array1.length; x++) {
    if(array1[x] === array2[x]) {
      return true;
    }
    else {
      return false;
    }
  }
};

module.exports = eqArrays;