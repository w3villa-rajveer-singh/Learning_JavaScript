// Exercises: Executing JS outside browser using Node.js--

// Q1. Install Node.js and create a .js file that logs a message.

console.log("Hello, World! I have executing this file using node,js.");

// Q2. Read environment variables using process.env.

console.log("Your system user is:", process.env.USER);
console.log("Node environment:", process.env.NODE_ENV);

// Q3. Create a simple file using fs.writeFileSync().

const fs = require("fs");

// Write content to a file
fs.writeFileSync("message.txt", "Hello, this file was created using Node.js!");
console.log("File created successfully!");

//Reading the content from that file
const data = fs.readFileSync("message.txt", "utf8");
console.log("File content:", data);
