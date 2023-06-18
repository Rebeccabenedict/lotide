// The reason why the function below is used is because we want it to return the identical item among the parameters 'x' and 'y'.

const findKeyByValue = function(x, y) {
  let emptyArray = Object.keys(x);
  for (let i of emptyArray) {
          if(x[i] === y) {
              return i
          }
  }
};

/*
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
*/

module.exports = findKeyByValue;
