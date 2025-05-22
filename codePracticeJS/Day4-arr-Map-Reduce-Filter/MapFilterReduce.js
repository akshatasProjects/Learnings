/*
  1. Get Names of Products In Stock
const products = [
  { name: "Laptop", price: 800, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 300, inStock: true }
];
🧠 Goal: Return ["Laptop", "Tablet"]
📌 Steps:

Use .filter() to select products where inStock === true
Then .map() to get just the name
*/

const products = [
  { name: "Laptop", price: 800, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 300, inStock: true },
];

let inStock = products
  .filter((item) => item.inStock === true)
  .map((prod) => prod.name);
console.log(inStock);

/*
  2. Get Emails of Active Users Only
const users = [
  { name: "Alice", email: "alice@example.com", active: true },
  { name: "Bob", email: "bob@example.com", active: false },
  { name: "Charlie", email: "charlie@example.com", active: true }
];
🧠 Goal: Return ["alice@example.com", "charlie@example.com"]

*/

const users = [
  { name: "Alice", email: "alice@example.com", active: true },
  { name: "Bob", email: "bob@example.com", active: false },
  { name: "Charlie", email: "charlie@example.com", active: true },
];
let activeUsers = users
  .filter((user) => user.active === true)
  .map((getEmail) => getEmail.email);
console.log(activeUsers);

/*
  3. Total Likes from All Posts

const posts = [
  { id: 1, content: "Post 1", likes: 20 },
  { id: 2, content: "Post 2", likes: 35 },
  { id: 3, content: "Post 3", likes: 45 }
];
🧠 Goal: Return total number of likes (20 + 35 + 45 = 100)
📌 Use: .reduce() on likes

*/

const posts = [
  { id: 1, content: "Post 1", likes: 20 },
  { id: 2, content: "Post 2", likes: 35 },
  { id: 3, content: "Post 3", likes: 45 },
];

let totalLikes = posts
  .map((getLike) => getLike.likes)
  .reduce((acc, eachLike) => acc + eachLike, 0);
console.log(totalLikes);

/*
  4. List All Hobbies from People

const people = [
  { name: "Tom", hobbies: ["reading", "gaming"] },
  { name: "Sara", hobbies: ["cooking"] },
  { name: "Ali", hobbies: ["swimming", "cycling", "gaming"] }
];

Goal: Return a single array of all hobbies
📌 Expected Output: ["reading", "gaming", "cooking", "swimming", "cycling", "gaming"]
📌 Steps:

Use .map() to extract hobbies arrays
Use .flat() to combine into a single array

*/

const people = [
  { name: "Tom", hobbies: ["reading", "gaming"] },
  { name: "Sara", hobbies: ["cooking"] },
  { name: "Ali", hobbies: ["swimming", "cycling", "gaming"] },
];

let hobby = people.map((eachPerson) => eachPerson.hobbies).flat();
console.log(hobby);

/*
  🔶 5. Count Students Who Passed All Subjects (Nested Array)
const students = [
  { name: "Ali", marks: [70, 80, 90] },
  { name: "Zara", marks: [60, 40, 75] },
  { name: "Tom", marks: [88, 92, 95] }
];
🧠 Goal: Count how many students scored 60 or more in all subjects
📌 Steps:

Use .filter() with .every(mark => mark >= 60)
Use .length to get the count
📌 Expected Output: 2

*/

const students = [
  { name: "Ali", marks: [70, 80, 90] },
  { name: "Zara", marks: [60, 40, 75] },
  { name: "Tom", marks: [88, 92, 95] },
];

let studPass = students.filter((eachStud) =>
  eachStud.marks.every((mark) => mark >= 60)
).length;

console.log(studPass);
