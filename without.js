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

const without = function(sourceArray, itemsToRemove) {
  const removedArray = []
  for (let x = 0; x < sourceArray.length; x++) {
    if (!itemsToRemove.includes(sourceArray[x])){
      removedArray.push(sourceArray[x])
    }
  } 
  return removedArray;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); 
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
