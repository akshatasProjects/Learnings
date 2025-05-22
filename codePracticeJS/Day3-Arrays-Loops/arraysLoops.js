/*
  1. Print All Items in an Array
  Given: const fruits = ["apple", "banana", "mango", "grape"];
  Hint:
Use a for loop or for...of loop to print each fruit on a new line.
*/

const fruits = ["apple", "banana", "mango", "grape"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// give me result also in for of
for (let fruit of fruits) {
  //for let item of array
  console.log(fruit);
  // print item
}

/*
  2. Add and Remove Elements
Hint:
Start with an array of 3 colors. Do the following:
Add one color at the end using .push()
Add one color at the beginning using .unshift()
Remove the last color using .pop()
Remove the first color using .shift()
Then print the final array.
*/

const colorArr = ["blue", "red", "green"];
console.log(colorArr.push("white"));
console.log(colorArr.unshift("black"));
console.log(colorArr.pop());
console.log(colorArr.shift());
console.log(colorArr);

/* Fixed
const colorArr = ["blue", "red", "green"];
colorArr.push("white");
colorArr.unshift("black");
colorArr.pop();
colorArr.shift();
console.log(colorArr); // Final array after changes

*/

/*
  3. Find the Largest Number in an Array
  Input: const nums = [45, 23, 89, 12, 78];
  Loop through the array and use a variable to keep track of the max number.
*/
const nums = [45, 23, 89, 12, 78];
let maxNum = nums[0];

for (let i = 1; i < nums.length; i++) {
  if (nums[i] > maxNum) {
    maxNum = nums[i];
  }
}
console.log("Largest number is:", max);
/*
  4. Count the Even Numbers in an Array
Input: const numbers = [10, 21, 4, 13, 66, 7];
Hint:
Use a loop and % 2 === 0 check. Keep a counter and print the count at the end.

*/
const numbers = [10, 21, 4, 13, 66, 7];
let count2 = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    count2++;
  }
}
console.log(count2);

// Repeat Practice
// Write code that finds the largest number in the array without using built-in methods like Math.max().
const numsArr = [45, 23, 89, 12, 78];

let max = numsArr[0];
for (let i = 1; i < numsArr.length; i++) {
  if (numsArr[i] > max) {
    max = numsArr[i];
  }
}
console.log(`Max Number is ${max}`);

// PART B: Counting Even Numbers
// Count how many even numbers are in the array and print the final count.
const evenNum = [10, 21, 4, 13, 66, 7];
let evenCount = 0;
for (let i = 0; i < evenNum.length; i++) {
  if (evenNum[i] % 2 === 0) {
    evenCount++;
  }
}
console.log(`There are ${evenCount} even numbers`);
