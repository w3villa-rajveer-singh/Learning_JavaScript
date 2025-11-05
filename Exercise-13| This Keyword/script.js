// Topic: this keyword in JS--

// Q1. Create an object with a method that logs this.

const person1 = {
  name: "Rajveer",
  age: 23,
  showthis: function () {
    console.log(this);
  },
};

person1.showthis(); //Prints the entire object

//------------------------------------------------------------------------------------------------------------------

// Q2. Compare this in regular and arrow functions.

const person2 = {
  name: "Rajveer",
  regularFunc: function () {
    console.log("Regular:", this);
  },
  arrowFunc: () => {
    console.log("Arrow:", this);
  },
};

person2.regularFunc(); //Prints the entire object
person2.arrowFunc(); //Empty object will print

//------------------------------------------------------------------------------------------------------------------

// Q3. Log this inside a global function vs object method.

// Global function
function globalFunc() {
  console.log("Global:", this);
}
globalFunc(); // Window object will print

// Object with a method
const obj = {
  name: "Rajveer",
  method() {
    console.log("Object Method:", this);
  },
};

obj.method(); //Prints the entire object
