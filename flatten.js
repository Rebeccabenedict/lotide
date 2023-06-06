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

const flatten = function(list) {
  const nArray = [];
  for(let x = 0; x < list.length; x++) {
      if(!Array.isArray(list[x])) {
          nArray.push(list[x]);
      }
      else{
          for(let y = 0; y < list[x].length; y++) {
              nArray.push(list[x][y]);
          }   
      }
      
  }
  return nArray;
};
console.log(flatten([1, 2, [3, 4], 5, [6]]));