// Ternary Operator
// Now let's say:

// let age = 20;
// if(age >= 18){
//     console.log("Adult");
// }
// else{
//     console.log("Minor");
// }
// This is perfectly Fine
// but this is a very small decision.
// JS gives us a shorter syntax called the Ternary Operator.

// SYNTAX:
// condition ? true_value : false_value

// Example:
// let age = 18;
// let result = age >= 18 ? "Adult" : "Minor";
// console.log(result);  Output: Adult

// How to read it: age >= 18 ? "Adult" : "Minor";
// Is age greater than and equal to 18 ?
// If yes: Adult
// If no: Minor

// Why it is called ternary?
// Because it has three parts:
// 1. condition  2. condition when true  3. condition when false

// Very common interview question
// why it is called a ternary operator?
// Because itstakes three operands: a condition, a value for the true case, a value for the false case.

// Ternary vs if/else
// let age = 10;
// let message;
// if(age >= 18){
//     message = "Adult";
// }
// else{
//     message = "Minor"
// }
// console.log(message);

// let age = 8;
// let message = age >= 18 ? "Adult" : "Minor";
// console.log(message);
// Both produce the same result.