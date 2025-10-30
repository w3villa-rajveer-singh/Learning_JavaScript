// Arrays and its methods--

// 1. Create an array of your 5 favorite fruits. Print the first and last element.

const fruits = ["mango", "banana", "apple", "grapes", "guava"];

const firstEle = fruits[0]; // Access elements using index
const secondEle = fruits[fruits.length - 1];

console.log(firstEle); //mango
console.log(secondEle); //guava

console.log("\t");
//--------------------------------------------------------------------------------------------------------

// 2. Use push() to add an item.
fruits.push("orange"); //push() adds at the end of array..
console.log(fruits);

// Use pop() to remove the last item.
fruits.pop(); //pop() deletes from the end of array..
console.log(fruits);

// Use unshift() to add an item at the start.
fruits.unshift("melon"); //unshift() adds at the start of array..
console.log(fruits);

// Use shift() to remove the first item.
fruits.shift(); //shift() adds at the start of array..
console.log(fruits);

// Remove the 2nd and 3rd elements using splice().
fruits.splice(1, 2); //splice removes the elements(one or more) from any position
console.log(fruits);

console.log("\t");
//--------------------------------------------------------------------------------------------------------

// 3. Create an array of names.

const names = ["Akshat", "Rajveer", "Krishna", "Satvik"];
console.log(names);

// Sort it alphabetically using sort().

names.sort();
console.log(names);

// Reverse it using reverse().

names.reverse();
console.log(names);

console.log("\t");
//--------------------------------------------------------------------------------------------------------

// 4. Combine two arrays [1, 2, 3] and [4, 5, 6] using concat() or spread operator (...)

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = arr1.concat(arr2); //using concat()
console.log(combinedArray);

const combinedArr = [...arr1, ...arr2]; //using spread operator(...)
console.log(combinedArr);

console.log("\t");
//--------------------------------------------------------------------------------------------------------

// 5. Use .filter() to return only even numbers from an array.

const nums = [1, 2, 3, 4, 5, 6];

const evenNums = nums.filter((num) => num % 2 == 0);
console.log(evenNums);

// Use .map() to create a new array where each number is doubled.

const doubled = nums.map((num) => num * 2);
console.log(doubled);

// Use .find() to get the first number greater than 4 in an array.

const numb = nums.find((num) => num > 5);
console.log(numb);

// Use .reduce() to calculate the sum of numbers in an array.

const reduced = nums.reduce((sum, num) => sum + num, 0);
console.log(reduced);
