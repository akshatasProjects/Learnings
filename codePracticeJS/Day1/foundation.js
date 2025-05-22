age = Number(prompt("Enter age"));

if (age >= 18) {
  console.log("Eligible");
} else {
  console.log("Not eligible");
}

// Swap two numbers
let a = 10; // a =5
let b = 5; //b=10

a = a + b; // 15
b = a - b; // 15- 5 , b = 10
a = a - b; // 15 - 10 a = 5
console.log(`${a} ${b}`);

// Compare two numbers
let c = 10;
let d = 19;

if (c > d) {
  return "c is greater";
} else if (d > c) {
  return "d is greater";
} else {
  return "both are equal";
}
