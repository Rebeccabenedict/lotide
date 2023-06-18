/* The reason why the function below is used is because we want it to take an 'object' and return the key of the location which was
given in the 'callback' parameter. 
*/

const findKey = function(object, callback) {
  let emptyObject = Object.keys(object);
  for (let i of emptyObject) {
      if(callback(emptyObject[i])) {
          return key;
      }
  }
};

/*
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
*/

module.exports = findKey;