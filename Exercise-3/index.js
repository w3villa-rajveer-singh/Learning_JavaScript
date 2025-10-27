let string = "42";                    //declared a string variable and assigned 42 value to it 
let number = Number(string);          // Converted the string variable into number using Number()
let result = number + 8;              // Added 8

console.log(result);                  //Log the Result

//------------------------------------------------------------------------------------------------------------------------

let str = "42";
console.log(typeof str);              // "string"

let num = Number(str);
console.log(typeof num);             // "number"


//-----------------------------------------------------------------------------------------------------------------------

//Implicit Conversion(Done Automatically By JS)

let num1 = 10;
let str1 = "5";

let result1 = num1 + str1; 
console.log(result1);                 // "105"
console.log(typeof result1);         // "string"


//Explicit Conversion(Done Manually By US)

let num2 = 10;
let str2 = "5";

let result2 = num2 + Number(str2);
console.log(result2);                 // 15
console.log(typeof result2);          // "number"


