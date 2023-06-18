/* The reason why the function below is used is because we want it to return an updated array. 
In addition to the elements that need to be removed from the primary array, we want these elements inputted in the parameter 'y'.
*/

const without = function(sourceArray, itemsToRemove) {
  const removedArray = []
  for (let x = 0; x < sourceArray.length; x++) {
    if (!itemsToRemove.includes(sourceArray[x])){
      removedArray.push(sourceArray[x])
    }
  } 
  return removedArray;
};

module.exports = without;