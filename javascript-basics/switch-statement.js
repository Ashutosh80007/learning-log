// Switch Statement:
// Now imagine this situation:
// let day = 3;         you want:  1 -> Monday, 2 -> Tuesday, 3 -> Wednesday, 4 -> Thursday
// if (day === 1) {
//  console.log("Monday");
// }else if (day === 2) {
//  console.log("Tuesday");
// }else if (day === 3) {
//  console.log("Wednesday");
// }else if (day === 4){
//  console.log("Thursday")
// }
// But this can become repetitive when you are comparing one value against many exact values.
// That's where 'switch' is useful.

// Basic 'switch' Syntax
// switch(value) {
// case value1:
//         //code
//     break;
// case value2:
//        //code
//     break;
// default:
//       //code
// }

// Example:
// let day = 3;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     default:
//         console.log("Invalid day");
// }  Output:- Monday

// Understand 'case':
// This  'switch (day)' means 'Take the value of day and compare it with the cases'.
// Then  'case 1:' means 'Is day equal to 1?'  Then  'case 2:' means 'Is day equal equal to 2?' and so on.

// Why is 'break' important?
// let day = 3;
// switch(day){
//     case 1:
//         console.log("Monday");
//     case 2:
//         console.log("Tuesday");
//     case 3:
//         console.log("Wednesday");         Output: Wednesday
//     case 4:                                       Thursday
//         console.log("Thursday");                  Invalid day       Why? because there is no break in this switch statement.
//     default:
//         console.log("Invalid day");
// }
// Because once JS entres a matching case, it continues executing the following case. This is called Fall-through.

// With break:
// let day = 3;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");       Output: Wednesday
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     default:
//         console.log("Invalid day");
// }  
// 'break' tells JS: 'Stop the switch here'

// default: 
// What happens if none of the cases match?
// Use 'default'.
// let day = 5;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");       Output: Invalid day
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     default:
//         console.log("Invalid day");
// }  
// 'default' part is similary to the 'else' part of an if/else structure.

// When should you use 'switch'?
// Use 'switch' when:
// You are comparing one value against multiple exact values.
// Example:
// let role = "admin";
// switch (role){
//     case "admin":
//         console.log("full access");
//         break;
//     case "user":
//         console.log("Limited Access");
//         break;
//     case "guest":
//         console.log("Guest Access");
//         break;
//     default:
//         console.log("Unknown role");
// } Output: Full access. 

// Why should we use if/else:
// When we have:
// ranges
// complex conditions
// multiple variables
// comparisons such as >,<,>=, <=

// Example: 
// let marks = 85;
// if(marks >= 90){
//      console.log("A");
// }
// else if(marks >= 80){
//      console.log("B");
// }

// Switch Interview Questions
// 1. What is 'switch' use for?
// 'switch'is used when we need to compare one expression against multiple possible exact values.
// 2. Why do we use 'break'?
// 'break' stop execution of the switch statement after a matching case. Without it, JS may continue executing the following case.
// 3. What is fall-through?
// Fall-through happens when a matching case continues into the next cases because there is no 'break'.
// 4. What is default?
// 'default' executes when none of the case match.
// 5. switch vs if/else?
// I perfer 'switch' when comparing one value with multiple exact value. I use if/else when conditions invovles ranges or more complex logical expressions.

// Interview Counter-question
// Can 'switch' handle condition like marks >= 90?
// Technically, JS 'switch' can be creatively with switch(true), but for normal code, if/else is clear and more appropriate for ranges.
// Example:
// if(marks >= 90){
//     A
// }else if(marks >= 80){
//     B
// }

// 'Switch' Summary
// SWITCH

// Used to compare one value against multiple exact values.

// Syntax:

// switch (value) {
//     case value1:
//         // code
//         break;

//     case value2:
//         // code
//         break;

//     default:
//         // code
// }

// Important:
// - case checks possible values.
// - break stops the switch.
// - Without break → fall-through can happen.
// - default runs when no case matches.
// - switch is good for exact-value comparisons.
// - if/else is better for ranges and complex conditions.