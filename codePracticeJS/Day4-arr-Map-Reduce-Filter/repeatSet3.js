/*
  1. Square Only Odd Numbers

Input: [1, 2, 3, 4, 5]
Goal: Return [1, 9, 25]
Steps:
- Use `.filter()` to keep odd numbers.
- Use `.map()` to square each.
*/

const inputNum = [1, 2, 3, 4, 5];
let squareOdd = inputNum
  .filter((eachNum) => eachNum % 2 !== 0)
  .map((dbl) => dbl * dbl);
console.log(squareOdd);

/*
  2. Get Names of Adults Only

// Input:
const people = [
  { name: "Ali", age: 17 },
  { name: "Sara", age: 22 },
  { name: "Tom", age: 19 },
  { name: "Zee", age: 15 }
];
// Goal: Return ["Sara", "Tom"]
// Steps:
// - Use `.filter()` to select age >= 18
// - Use `.map()` to extract name

*/
const people = [
  { name: "Ali", age: 17 },
  { name: "Sara", age: 22 },
  { name: "Tom", age: 19 },
  { name: "Zee", age: 15 },
];

let getName = people
  .filter((person) => person.age >= 18)
  .map((eachPerson) => eachPerson.name);
console.log(getName);

/*
  3. Total Price of Only Expensive Items
  // Input:
const items = [
  { item: "Book", price: 120 },
  { item: "Pen", price: 30 },
  { item: "Shoes", price: 800 },
  { item: "Pencil", price: 10 }
];
// Goal: Sum prices of items > 100 (only Book and Shoes)
// Steps:
// - Use `.filter()` to keep price > 100
// - Use `.map()` to get prices
// - Use `.reduce()` to sum

*/

const items = [
  { item: "Book", price: 120 },
  { item: "Pen", price: 30 },
  { item: "Shoes", price: 800 },
  { item: "Pencil", price: 10 },
];

let getSum = items
  .filter((itemPrice) => itemPrice.price > 100)
  .map((getPrice) => getPrice.price)
  .reduce((acc, price) => acc + price, 0);

console.log(getSum);

/*
  4. Count Vowels in Each Word
  // Input: ["apple", "sky", "orange"]
// Goal: Return [2, 0, 3]
// Steps:
// - For each word, count vowels (a, e, i, o, u)
// - Use `.map()` with logic inside to count vowels
*/

const words = ["apple", "sky", "orange"];
const vowels = ["a", "e", "i", "o", "u"];

let vowelCount = words.map((eachWord) => {
  let count = 0;
  for (let char of eachWord.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
});
console.log(vowelCount);
