/*
1. Convert Temperatures from Celsius to Fahrenheit

Input: const celsius = [0, 10, 20, 30];
Hint:
Use .map() to convert each temperature:
Formula = (temp * 9/5) + 32

*/
const celsius = [0, 10, 20, 30];

const fahrenheit = celsius.map((eachTemp) => {
  return (eachTemp * 9) / 5 + 32;
});
console.log(fahrenheit);

/*
  2. Filter Out Failing Scores
Input: const scores = [95, 40, 76, 58, 99, 30];
Hint:
Use .filter() to keep only scores 60 or above.
*/

const scores = [95, 40, 76, 58, 99, 30];

let filtered = scores.filter((score) => score >= 60);
console.log(filtered);

/*
  3. Count Total Price of Items

Input: const prices = [50, 30, 20, 100];
Hint:
Use .reduce() to find the total sum.
Start from 0 and add each price to the accumulator.

*/
const prices = [50, 30, 20, 100];

let total = prices.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(total);

/*
4. Chain Methods (Advanced Practice)

Input: const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
Goal:
Filter even numbers
Multiply each even number by 2
Sum the result

Hint:
Chain .filter(), .map(), and .reduce()
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const result = numbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2)
  .reduce((acc, cur) => acc + cur, 0);

console.log(result);
