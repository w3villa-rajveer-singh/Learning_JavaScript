// Topic: Strings and Its Methods, Template Literal

// Ques1. Extract a substring from a full name.

let fullName = "Rajveer Singh";
console.log("FullName:", fullName);

let firstName = fullName.substring(0, 7);
console.log("First Name:", firstName); 

let lastName = fullName.substring(8);
console.log("Last Name:", lastName); 

console.log("\t");
//---------------------------------------------------------------------------------------------------

// Ques2. Replace a word in a sentence and log the result.

let text = "My full name is Rajveer Verma";
console.log("Before Replacement:", text);

let newText = text.replace("Verma", "Singh");
console.log("After Replacement:", newText);

console.log("\t");
//------------------------------------------------------------------------------------------------------

//Ques3. Use template literals to construct a greeting message.

let Name = "Krishna";
let language = "JavaScript";
let greeting = `Hello, ${Name}! Welcome to the world of ${language}.`;
console.log(greeting);
