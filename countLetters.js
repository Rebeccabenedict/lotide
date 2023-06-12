const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(phrase) {
  const counter = {}
  for(let i of phrase) {
      let characters = phrase[i];
      if (counter[i]){
          counter[i] += 1;
      }
      else {
          counter[i] = 1;
      }
  }
  return counter;
};