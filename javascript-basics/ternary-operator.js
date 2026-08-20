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

// When should you use ternary
// let age = 20;
// let status = (age >= 18) ? "Adult" : "Minor";
// console.log(status);

// let isLoggedIn = true;
// let message = isLoggedIn ? "Welcome" : "Please login";
// console.log(message);

// let marks = 70;
// let result = marks >= 40 ? "Pass" : "Fail";
// console.log(result);

// When NOT to use Ternary
// let age = 10;
// let hasLicense = true;
// let result = age >= 18 ? hasLicense ? "can drive" : "Cannot drive" : "to young";
// console.log(result);
// Technically possible, but readability becomes poor. for complex logic use if/else.

// Nested Ternary:
// let marks = 85;
// let grade = marks >= 90 ? "A" : marks >= 80 ? "B" : marks >= 70 ? "C" : "D";
// console.log(grade);
// But don't overuse nested ternaries.

// Ternary operator interview questions
// 1. What is the ternary operator?
// The ternery operator is a concise way to write simple if/else expression.

// 2. What is its syntax?
// condition ? valueIfTrue : valueIfFalse

// 3. Why is it called ternary?
// Because its has three operands.

// 4. Can ternary replace every if/else?
// No, its replace only simple condition.

// 5. Can ternary return a value?
// Yes, This is one of the biggest advantages.
// let age = 20;
// let status = age >= 18 ? "Adult" : "Minor";
// Here the ternary expression produces a value that is assigned to status.

// One important distinction
// if (age >= 18) {
//     console.log("Adult");
// }
// This is a statement.

// let status = age >= 18 ? "Adult" : "Minor";
// This uses a ternary expression that produces a value.
// For interviews, remember:
// Ternary is an expression and can directly produce a value.