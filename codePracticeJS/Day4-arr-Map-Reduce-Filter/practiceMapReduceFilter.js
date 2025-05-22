/*
🔷 1. Get Initials of Full Names
Input:

["John Doe", "Sara Smith", "Mike Johnson"]
Goal:
Return an array of initials, like:
["JD", "SS", "MJ"]

Hint:
Use .map()
For each name, split by space, take the first letter of each part and capitalize.
*/

const fullName = ["John Doe", "Sara Smith", "Mike Johnson"];

let getInitials = fullName.map((eachName) =>
  eachName
    .split(" ")
    .map((part) => part[0].toUpperCase())
    .join("")
);

console.log(getInitials);

/*
  2. Filter Students Who Passed All Subjects
Input:

[
  { name: "Ali", scores: [80, 75, 90] },
  { name: "Zara", scores: [60, 58, 70] },
  { name: "Tom", scores: [90, 88, 95] }
]
Goal:
Return names of students who scored 60 or more in all subjects.
Output: ["Ali", "Tom"]

Hint:
Use .filter() to check if every score is ≥ 60 using .every()
Then .map() to get just names.

*/

const studData = [
  { name: "Ali", scores: [80, 75, 90] },
  { name: "Zara", scores: [60, 58, 70] },
  { name: "Tom", scores: [90, 88, 95] },
];

getData = studData
  .filter((student) => student.scores.every((score) => score >= 60))
  .map((student) => student.name);

console.log(getData);

/*
3. Count Total Items in a Shopping Cart
Input:
[
  { product: "Apple", quantity: 3 },
  { product: "Banana", quantity: 2 },
  { product: "Orange", quantity: 5 }
]
Goal:
Return total quantity of items: 10

Hint:
Use .reduce() to add all quantity values.

*/

const productsData = [
  { product: "Apple", quantity: 3 },
  { product: "Banana", quantity: 2 },
  { product: "Orange", quantity: 5 },
];

let getTotal = productsData
  .map((qty) => qty.quantity)
  .reduce((acc, qty) => acc + qty, 0);
console.log(getTotal);

/*
  4. Create Summary Sentence from Book Titles
Input:
["The Alchemist", "Atomic Habits", "Deep Work"]
Goal:
Return a sentence:
"You have 3 books: The Alchemist, Atomic Habits, Deep Work."

Hint:
Use .join() for titles
Use titles.length to get count

*/

const books = ["The Alchemist", "Atomic Habits", "Deep Work"];

let getSentence = books.join(" ");
let len = books.length;
console.log(`You have ${len} books : ${getSentence}`);
