/* The reason why the function below is used is because we want it to return an updated array with the function inputted 
in the parameter 'callback'.
*/

const map = function(array, callback) {
  const outcome = [];
  for(let i of array) {
      outcome.push(callback(i));
  }
  return outcome;

}

module.exports = map;