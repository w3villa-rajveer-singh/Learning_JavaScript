// Functions and Its Types--

// 1. Create a function sayHello() that prints "Hello, World!"

function sayHello() {
  console.log("Hello, World!");
}

sayHello(); // function call

console.log("\t");
//-------------------------------------------------------------------------------------------------------------------

//2. Create a function add(a, b) that returns their sum.

function add(a, b){        //Named function
    return a+b;
}

let result1 = add(5, 6);
console.log(result1);

console.log("\t");
//-------------------------------------------------------------------------------------------------------------------


// 3. Write an arrow function to multiply two numbers.

const addTwo = (a,b) => a+b;        //Arrow Function

let result2 = addTwo(3,4);

console.log(result2);

console.log("\t");
//-------------------------------------------------------------------------------------------------------------------


// 4. Assign an anonymous function to a variable that squares a number.

const square = function(a){     //Anonymous Function
    return a * a;
}

let result3 = square(4);

console.log(result3);

console.log("\t");
//-------------------------------------------------------------------------------------------------------------------

// 5. Write an IIFE that prints "This runs immediately!"

(function () {
    console.log("This runs immediately!");   //IIFE
})();