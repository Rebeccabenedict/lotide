const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};

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

const middle = function (list) {
  emptyArray = [];
  if(list.length < 3) {
      return [];
  }
  else if (list.length % 2 === 0) { 
      return [list[Math.floor(list.length / 2) - 1], list[Math.floor(list.length / 2)]];
  }
  else if (list.length % 2 !== 0){
      return Math.round(list.length/2);
  }
  
}
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5]))
console.log(middle([1])) 
console.log(middle([1, 2]))
console.log(middle([1,2,3,4]));
