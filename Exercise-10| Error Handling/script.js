// Topic: Error Handling--

// Q1. Wrap a JSON.parse() call inside try...catch.

const data1 = '{ "name": "Rajveer", "age": 25 }';  //  valid JSON

try {
    const obj = JSON.parse(data1);
    console.log("Parsed object:", obj);            // try block will execute
} 
catch (error) {                                  // catch block will not execute 
    console.log("Error while parsing JSON:", error.message);
}

//Output: Parsed object: { name: 'Rajveer', age: 25 }


const data2 = '{ name: "Rajveer", age: 25 }';   //  invalid JSON 

try {
    const obj = JSON.parse(data2);
    console.log("Parsed object:", obj);            // try block will execute
} 
catch (error) {                                  // catch block will execute as well 
    console.log("Error while parsing JSON:", error.message);
}

//Output: Error while parsing JSON: Unexpected token n in JSON at position 2

//------------------------------------------------------------------------------------------------------------------------


// Q2. Create a function that throws an error if input is not a number.

function checkNumber(input){
    if (typeof input !== "number"){
        throw new Error("Invalid Input: Not A Number");     //defining custom error
    }
    console.log("Valid Input:", input);
}

try {
    checkNumber(42);       //function call with valid input
    checkNumber("42");       //function call with invalid input
} catch (error) {
    console.log("Error:", error.message);
}

//Output: For 42, Valid Input: 42
//Output: For "42", Error: Invalid Input: Not A Number

//----------------------------------------------------------------------------------------------------------------

// Q3. Log an error message gracefully in a catch block.

try {
  let result = 10 / a;   //'a' is not defined
} 
catch (error) {                                          
console.log("Error details:", error.message);   //Handling the error gracefully
}

//Output: Error details: a is not defined