/* The reason why the function below is used is because we want it to return the midpoint of an array. 
Essentially, if there are an odd amount of items in an array, the function will return one item from the midpoint. 
However, if there is an even amount of items in an array, it will return two items from the midpoint.
*/

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
  
}; 

module.exports = middle;