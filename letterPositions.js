/* The reason why the function below is used is because we want it to take each letter in a phrase and return the index of every
 letter from the phrase.
*/

const letterPositions = function(phrase) {
  const outcome = {};
  for (let i of phrase) {
      for(let character of i) {
          if(i.indexOf(character)) {
              outcome[i] += 1
          }
          else{
              outcome[i] = 1
          }
      }
  }
  return outcome;
};

module.exports = letterPositions;