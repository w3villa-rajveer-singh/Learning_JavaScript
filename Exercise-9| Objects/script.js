// Topic: Object Manipulation--

// Ques1. Create a student object with name, age, and grade.

const student = {
    name: "Rajveer",
    age: "23",
    grade: "A"
};

console.log("Student Details:", student);
console.log("\t");

//-------------------------------------------------------------------------------------------------------------------------

// Ques2. Add a new property isPassed and delete grade.

//Adding new property isPassed-
student.isPassed = true;
console.log("Added isPassed property:", student);

//Deleting the grade property-
delete student.grade;
console.log("Deleted Grade property:", student);

console.log("\t");

//-------------------------------------------------------------------------------------------------------------------------

// Ques3. Access properties using both dot and bracket notation.

//Accessing properties using dot operator-
console.log("Accessing properties using dot operator-");
console.log("student.name:", student.name);
console.log("student.age:", student.age);
console.log("student.isPassed:", student.isPassed);

console.log("\t");

//Accessing properties using braces notation-
console.log("Accessing properties using Braces Notation-");
console.log("student['name']:", student["name"]);
console.log("student['age']:", student["age"]);
console.log("student['isPassed']:", student["isPassed"]);

console.log("\t");

//----------------------------------------------------------------------------------------------------------------------