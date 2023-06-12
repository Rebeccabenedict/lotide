const map = function(array, callback) {
  const outcome = [];
  for(let i of array) {
      outcome.push(callback(i));
  }
  return outcome;

}

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);