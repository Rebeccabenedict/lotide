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

console.log(letterPositions("hello there"));