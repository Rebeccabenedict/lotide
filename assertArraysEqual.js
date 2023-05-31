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

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};

console.log(assertArraysEqual([3, 2, 1], [3, 2, 1]));
