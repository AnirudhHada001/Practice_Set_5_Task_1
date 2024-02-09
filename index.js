// Practice Set 5
// Q1
let prompt = require("prompt-sync")();
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let num = prompt("Enter a number : ");
num = Number.parseInt(num);

arr.push(num);
console.log(arr);

// Q2

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let num1;

do {
  num1 = prompt("Enter a number : ");
  num1 = Number.parseInt(num1);

  arr1.push(num1);
} while (num1 != 0);
console.log(arr1);

// Q3
let arr2 = [1, 2, 30, 4, 50, 6, 7, 83, 670];
let n = arr2.filter((x) => {
  return x % 10 == 0;
});
console.log(n);

// Q4
let arr3 = [1, 2, 30, 4, 50, 6, 7, 83, 670];
let n1 = arr3.map((x) => {
  return x * x;
});
console.log(n1);

// Q5
let arr4 = [1, 2, 3, 4, 5];
let n2 = arr4.reduce((x1, x2) => {
  return x1 * x2;
});
console.log(n2);

// Task-1
let randomNo = Math.floor(Math.random() * 101);
let count = 1;
let num2 = Number.parseInt(prompt("Guess the number : "));

while (randomNo != num2) {
  if (num2 > randomNo) console.log("Your guess is too large");
  else console.log("Your guess is too small");

  num2 = Number.parseInt(prompt("Guess the number again : "));
  count++;
}

console.log("Your score is ", 100 - count);
