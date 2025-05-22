/*
1 Get All Product Names

const products = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 }
];

Steps:
Use .map()
Access object property using object.property → product.name
*/
const products = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];

let list = products.map((product) => product.name);
console.log(list);

/*
  2. Filter Expensive Products (price > 400)
Input:
(Same as above)
Goal: Return array of products with price > 400
Steps:
Use .filter()
Check product.price > 400
*/

let price = products.filter((price) => price.price > 400);
console.log(price);

/*
  3. Get Names of Expensive Products Only
Goal: Return ["Laptop", "Phone"]
Steps:
First .filter() by price > 400
Then .map() to extract just product.name
*/

let expProduct = price.map((exp) => exp.name);
console.log(expProduct);

/*
  4. Calculate Inventory Value
Input:
const inventory = [
  { item: "Pen", price: 10, quantity: 2 },
  { item: "Notebook", price: 40, quantity: 3 },
  { item: "Pencil", price: 5, quantity: 4 }
];
Goal: Return total inventory value (price × quantity for each item)

Steps:
Use .map() to calculate price * quantity for each object
Then .reduce() to sum those values

*/

const inventory = [
  { item: "Pen", price: 10, quantity: 2 },
  { item: "Notebook", price: 40, quantity: 3 },
  { item: "Pencil", price: 5, quantity: 4 },
];

let totalInv = inventory
  .map((item) => item.price * item.quantity)
  .reduce((acc, value) => acc + value, 0);

console.log(totalInv);

/*
  5. Count Number of Passed Students
Input:
const students = [
  { name: "Ali", score: 80 },
  { name: "Zara", score: 55 },
  { name: "Tom", score: 70 }
];
Goal: Count how many students scored ≥ 60
Steps:
Use .filter() with student.score >= 60
Then use .length to count

*/
const students = [
  { name: "Ali", score: 80 },
  { name: "Zara", score: 55 },
  { name: "Tom", score: 70 },
];

let stud = students.filter((marks) => marks.score >= 60).length;
console.log(stud);
