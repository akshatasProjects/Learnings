/*
  Exercise 1:
   Use spread to combine the two arrays into one
*/

const fruits1 = ["apple", "banana"];
const fruits2 = ["orange", "mango"];
const combined = [...fruits1, ...fruits2];
console.log(combined);

/*
  Exercise 2:
  // Use rest to collect remaining user info
  // Destructure name and put the rest in another variable
*/

const user = { name: "Zara", age: 30, country: "UAE" };
const { name, ...rest } = user;
console.log(name);
console.log(rest);

/*
   Exercise 3:
   Use rest in a function to multiply all input numbers
*/

function multiply(...nums) {
  return nums * nums;
}

console.log(multiply(3, 4));
