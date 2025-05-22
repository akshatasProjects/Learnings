/*   Grading System
  Write a program that takes a score (0–100) and outputs the grade:
  90–100 → A
  80–89 → B
  70–79 → C
  60–69 → D
  Below 60 → F

Hint:
Use an if-else if ladder to check ranges. Make sure to check from highest to lowest score.
*/

let marks = Number(prompt("Enter your Marks"));

if (marks >= 90 && marks <= 100) {
  console.log("Grade A");
} else if (marks >= 80 && marks <= 89) {
  console.log("Grade B");
} else if (marks >= 70 && marks <= 79) {
  console.log("Grade C");
} else if (marks >= 60 && marks <= 69) {
  console.log("Grade D");
} else if (marks < 60) {
  console.log("Grade F");
}

/*

2. Days of the Week
Ask the user for a number (1–7) and print the name of the day.

Hint:
Use a switch statement.
Example:
1 → Sunday
2 → Monday
...and so on.

*/

day = Number(prompt("Enter a number beween 1 to 7"));

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Enter number between 1 to 7");
}

/*
3. Print Multiplication Table of a Number (1 to 10)
Hint:
Use a for loop.
Ask user for a number, then multiply it by values from 1 to 10 and print each line like:
5 x 1 = 5, 5 x 2 = 10...

*/

let num = Number(prompt("Enter a number for multiplication"));

for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

/*
4. Print All Even Numbers from 1 to 50
Hint:
Use a while loop. Start from 1, check if the number is even, and print it.
You can use the modulus operator (%) to check if a number is divisible by 2
*/

i = 1;
while (i <= 50) {
  if (i % 2 === 0) console.log(i);
  i++;
}
