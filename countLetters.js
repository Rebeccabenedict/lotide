// The reason why the function below is used is because we want it to return the count of characters from a string.

const countLetters = function(phrase) {
  const count = {}
  for(let i of phrase) {
      let characters = phrase[i];
      if (count[i]){
          count[i] += 1;
      }
      else {
          count[i] = 1;
      }
  }
  return count;
};

module.exports = countLetters;