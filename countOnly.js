const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const outcome = {};
  for (const i of allItems) {
    if (itemsToCount[i]) {
      if (outcome[i]) {
        outcome[i] += 1;
        console.log(outcome);
      } else {
        outcome[i] = 1;
      }
    }
  }
  return outcome;
};
console.log(countOnly((
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
),("Karl")));