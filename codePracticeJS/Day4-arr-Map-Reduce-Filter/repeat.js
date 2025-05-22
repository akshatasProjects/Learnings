/*
  1. Double Every Number

Input: [1, 2, 3, 4]
Goal: Use `.map()` to return [2, 4, 6, 8]
Hint: Return num * 2

*/
const num = [1, 2, 3, 4];
let dblNum = num.map((number) => number * 2);
console.log(`Doubled Number are ${dblNum}`);

/*
2. Keep Only Words Longer Than 3 Letters

Input: ["hi", "apple", "dog", "sun", "elephant"]
Goal: Use `.filter()` to return ["apple", "elephant"]
Hint: Return word.length > 3
*/

const words = ["hi", "apple", "dog", "sun", "elephant"];
let wordLen = words.filter((item) => item.length >= 3);
console.log(wordLen);

/*
  3. Sum All Negative Numbers

Input: [5, -3, 9, -8, 12]
Goal: Use `.filter()` + `.reduce()` to return -11
Hint:
* Filter numbers < 0
* Reduce to add them
*/

const numArray = [5, -3, 9, -8, 12];

let sum = numArray.filter((no) => no < 0).reduce((acc, tot) => acc + tot, 0);
console.log(sum);

/*
  4. From Prices to Final Bill with Tax
Input: [100, 200, 50]
Tax: 10%
Goal: Use `.map()` to add 10% to each, then `.reduce()` to get total
Output: Total bill with tax

Hint:
Multiply each price by 1.1 in .map()
Add with .reduce()

*/

const price = [100, 200, 50];
let finalBill = price
  .map((bill) => bill * 1.1)
  .reduce((acc, tot) => acc + tot, 0);

console.log(finalBill);
