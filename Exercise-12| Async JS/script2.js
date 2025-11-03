// Topic: ES6 Features(Destructuring, Rest and Spread Operator)--

// Q1. Destructure an object and log the values.

const person = {
  //Creating an object
  name: "Rajveer",
  age: 23,
  gender: "Male",
  role: "Admin",
};

const { name, age, role, gender } = person; //destructuring an object

console.log(`Person's name: ${name}`); //Logging the object values
console.log(`Person's age: ${age}`);
console.log(`Person's gender: ${gender}`);
console.log(`Person's role: ${role}`);

//---------------------------------------------------------------------------------------------------------------

// Q2. Use spread to merge two arrays.

const cars = ["Mercedes", "Audi", "Swift", "Mahindra"];
const bikes = ["Bajaj", "Splendor", "TVS", "Royal Enfield"];

console.log("Before Merging:");
console.log(cars);
console.log(bikes);

console.log("After Merging:");
const vehicles = [...cars, ...bikes]; //Using Spread Operator(...) to merge two arrays
console.log(vehicles);

//----------------------------------------------------------------------------------------------------------------

// Q3. Write a function with default parameters and call it with and without arguments.

function sayHi(name = "My Friend!") {
  console.log(`Hi, ${name}`);
}

console.log("Calling the Function with Arguments--");
sayHi("Raj!");
sayHi("Priya!");

console.log("Calling the Function without Arguments--");
sayHi();
