// A variable is a 'namestorage' for data.
// let message;
// here 'let' is a keyword and 'message' create/declare variable with the name 'message'.

// Task - 1
// Working with variables
// 1.Declare two variables: admin and name.
// 2.Assign the value "John" to name.
// 3.Copy the value from name to admin.
// 4.Show the value of admin using alert (must output “John”).
// Solution:-
// let admin;
// let name = "John";
// admin = name;
// alert(admin);

// Task - 2
// 1.Create a variable with the name of our planet. How would you name such a variable?
// let ourPlanetName = "Earth";
// 2.Create a variable to store the name of a current visitor to a website. How would you name that variable?
// let currentUserName = "Ashutosh";

// Task - 3
// 5 variables banao — kuch let se, kuch const se — jisme string, number, boolean, aur ek array store karo
// let name = "Ashutosh";
// let age = 25;
// let isAdult = true;
// let fruit = ['Apple', 'Mango', 'Banana'];
// const dob = '14-07-2001';
// const pi = 3.14;

// Task - 4
// 'const' se banaya variable reassign karne ki koshish karo — error dekho, samjho kyun aata hai
// const amount = 550;
// amount = 570;
// console.log(amount);
// This gives error "TypeError: Assignment to constant variable."

// Task - 5
// same naam se let variable do baar declare karne ki koshish karo — kya hota hai dekho
// let amount = 550;
// let amount = 570;
// console.log(amount);
// This gives error "SyntaxError: Identifier 'amount' has already been declared"

// Task - 6
// 3 variables banao let se — apna naam, age, aur ek boolean (isEmployed)
// let name = "Ashutosh";
// let age = 25;
// let isEmployed = true;

// Task - 7
// ek variable const se banao — koi fix value (jaise PI = 3.14)
// const dob = '14-07-2026';

//Task - 8
// 'typeof' use karke har variable ka type console.log karo
// String:- 
// let message = "Hello World!";
// console.log(typeof message);

// Number:- 
// let age = 25;
// console.log(typeof age);

// Boolean:- 
// let isEmployed = true;
// console.log(typeof isEmployed);

// Object:- 
// let fruit = ['Apple', 'Mango', 'Banana'];
// console.log(typeof fruit);

// Bigint:-
// let number = 9007199254740994n;
// console.log(typeof number);

// Undefined:-
// let age;
// console.log(typeof age);

// NULL:-
// let data = null;
// console.log(typeof data); 'The output will be object.'

// Array:-
// let subject = ['Computer', 'English', 'Hindi'];
// console.log(typeof subject);  //Object
// console.log(Array.isArray(subject)); // true

// Task - 9
// let name = 'Ashutosh';
// alert(`Hello ${1}`);  // hello 1
// alert(`Hello ${"name"}`);  // hello name
// alert(`Hello ${name}`);  // hello Ashutosh