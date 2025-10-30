//Declaring variables using all three keywords and assigned values-

var fullName = "Rajveer";       // can be re-declared and re-assigned
let age = 25;                  // can be re-assigned but not re-declared
const country = "India";      // cannot be re-assigned or re-declared

console.log(fullName);
console.log(age);
console.log(country);

// ------------------------------------------------------------------------------------------------------------------------

//Creating an object and logged two keys-

const employee = {
    name: "Rajveer",
    age: 24,
    gender: "Male",
    city: "Kanpur"
}

console.log(employee);            //prints the entire object
console.log(employee.name);       //prints the name of the employee
console.log(employee.age);        //prints the age of the employee

//----------------------------------------------------------------------------------------------------------------------------

// Stored different data types in variables and log their typeof-

let myName = "Rajveer";                      
let number = 42;                            
let isActive = true;                        
let items = ["apple", "mango"];              
let personObj = { name: "Raj" };            
let emptyValue = null;                      
let notDefined;                             

console.log(typeof myName);                    // "string"
console.log(typeof number);                   // "number"
console.log(typeof isActive);                 // "boolean"
console.log(typeof items);                    // "object"
console.log(typeof personObj);                // "object"
console.log(typeof emptyValue);               // "object"
console.log(typeof notDefined);               // "undefined"
