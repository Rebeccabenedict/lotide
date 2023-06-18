/* The reason why the function below is used is because we would like it to count the items we want from 'allItems' from what is 
inputted in 'itemsToCount'.
*/

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

/* 
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
*/

module.exports = countOnly;