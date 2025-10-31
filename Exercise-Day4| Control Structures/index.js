//Control Structures (If, Else, Loops)-

// 1. Write a program that checks if a given number is even or odd using if-else..

let num = 4;

if (num % 2 == 0) {
  //Check if the num is even or odd
  console.log(`${num} is an even number`); //if num is even, this line will print
} else {
  console.log(`${num} is an odd number`); //if num is odd, this line will print
}

console.log("\t");
//-------------------------------------------------------------------------------------------------------------------------

// 2. Take three numbers and find the largest using if-else if-else..

let num1 = 3;
let num2 = 4;
let num3 = 5;

if (num1 > num2 && num1 > num3) {
  console.log(`${num1} is the largest number`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`${num2} is the largest number`);
} else {
  console.log(`${num3} is the largest number`);
}

console.log("\t");
//----------------------------------------------------------------------------------------------------------

//3.Create an object {name: "Raj", age: 22, city: "Kanpur"} , Use a for-in loop to print all keys and values.

const person = {
  name: "Raj",
  age: 22,
  city: "Kanpur",
};

for (let key in person) {
  console.log(key, ":", person[key]);
}

console.log("\t");
//-------------------------------------------------------------------------------------------------------------

// 4. Given const colors = ["red", "green", "blue"];
// Use:
// for-of to print values
// .forEach() to print both index and value

const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}

console.log("\t");

colors.forEach(function (color, index) {
  console.log(index, ":", color);
});



