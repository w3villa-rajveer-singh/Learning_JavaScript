// Topic: Arrays and its methods:


// Q1. Create an array and demonstrate basic array operations.

const numbers = [1, 2, 3, 4, 5, 6];
console.log("Original array:", numbers);


// Q2. Use map() to multiply all values in an array by 2

const doubledArray = numbers.map(num => num * 2);
console.log("Array after multiplying each number by 2:", doubledArray);


// Use filter() to get even numbers from an array.
const evenArray = numbers.filter(num => num % 2 == 0);
console.log("Array containing only even numbers:", evenArray);
