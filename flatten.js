// The reason why the function below is used is because we want it to flatten multiple arrays into a single array.

const flatten = function(list) {
  const nArray = [];
  for(let x = 0; x < list.length; x++) {
      if(!Array.isArray(list[x])) {
          nArray.push(list[x]);
      }
      else{
          for(let y = 0; y < list[x].length; y++) {
              nArray.push(list[x][y]);
          }   
      }
      
  }
  return nArray;
};

module.exports = flatten;