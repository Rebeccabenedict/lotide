const joinList = function(list) {
  let newList = [];
  for (let x = 0; x < list.length; x++) {
    newList.push(list[x]);
  }
  console.log(`Today i learned about ${newList.join(', ')}.`);
}

console.log(joinList(["gists", "types", "operators", "iteration", "problem solving"]));