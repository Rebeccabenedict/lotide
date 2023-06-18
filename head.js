// The reason why the function below is used is because we want it to return the first item of an array.

const assertEqual = require('./assertEqual');
const head = function(elements) {
  return elements[0]
};

module.exports = head;