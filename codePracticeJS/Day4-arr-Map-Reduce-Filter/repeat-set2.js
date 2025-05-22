/*
  🔷 1. Capitalize All Names
Input: ["john", "sara", "mike"]
Goal: Return ["John", "Sara", "Mike"]

Hint: Use `.map()` and `str[0].toUpperCase() + str.slice(1)`
*/

const names = ["john", "sara", "mike"];
let capialize = names.map((each) => each[0].toUpperCase() + each.slice(1));

console.log(capialize);

/*
  🔷 2. Filter Emails with Gmail Only
Input: ["alex@gmail.com", "bob@yahoo.com", "chris@gmail.com", "dan@hotmail.com"]
Goal: Return only Gmail addresses
Hint: Use `.filter()` and `email.includes("gmail.com")`
*/

let emailList = [
  "alex@gmail.com",
  "bob@yahoo.com",
  "chris@gmail.com",
  "dan@hotmail.com",
];

let filterList = emailList.filter((email) => email.includes("gmail.com"));
// emailList.filter(email => email.endsWith("gmail.com"));
console.log(filterList);

/*
  3. Total Characters in All Strings
Input: ["hello", "world", "openai"]
Goal: Return total character count (e.g. 16)
Hint: Use `.reduce()` to add up `str.length`
*/

let words = ["hello", "world", "openai"];
let totalChar = words.reduce((acc, eachWord) => acc + eachWord.length, 0);

console.log(`Total characters in words are ${totalChar}`);

/*
  4. Product Inventory Value

Input:
[
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 40, quantity: 3 },
  { name: "Pencil", price: 5, quantity: 4 }
]

Goal: Return total value of inventory (price * quantity for each)
Hint: Use `.map()` to get value per item, then `.reduce()` to sum

*/
const inventory = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 40, quantity: 3 },
  { name: "Pencil", price: 5, quantity: 4 },
];

let total = inventory
  .map((item) => item.price * item.quantity)
  .reduce((acc, totalPrice) => acc + totalPrice, 0);

console.log(total);
