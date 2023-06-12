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
  
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject)); //