// PART 1
var hobbies = [
  "writing poetry",
  "dancing",
  "singing",
  "reading",
  "watching TV",
  "petting my cat"
];

console.log(hobbies);
console.log(hobbies.length);

hobbies.push("writing");

console.log(hobbies[2]);

hobbies.pop();

hobbies.splice(3, 0, "yoga", "playing violin");
console.log(hobbies);

hobbies.shift();

hobbies.unshift("gardening");
console.log(hobbies);

//PART 2
var goals = [
  "writing a poetry collection",
  "starting a coding business",
  "adopting all the cats"
];
var allTheThings = hobbies.concat(goals);
console.log(allTheThings);
console.log(allTheThings.indexOf("watching TV"));
allTheThings.splice(6, 1);
console.log(allTheThings);

//PART 3
var plans = allTheThings.map(function (item) {
  return `I can't wait to start ${item}`;
});
console.log(plans);
