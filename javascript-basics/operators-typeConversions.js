// Operand:- An operand is what operators are applied. In Multiplication of 5 * 2, left operand is '5' and the right operand is '2'. Some times we call them 'argument' instead of 'Operands'.

// Unary:- An operator is unary if it has a single operand.
// let x = 5;
// x =  -x;
// console.log(x); output will be -5.

// Binary:- An operator is binary if it has two operand. 
// let a = 4;
// let b = 9;
// console.log(b-a); Output will be 5.

// Arithmatic Operator
// Addition +,
// Subtraction -,
// Multiplication *,
// Division /,
// Remainder %,
// Exponentiation **.

// Remainder %:-
// The result of a % b is the reminder of the integer division of a by b.
// console.log(5 % 2); reminder:- 1
// console.log(8 % 3); reminder:- 2

// Exponentiation **:-
// The exponentition operator a**b raises a to the power of b
// console.log(2**2); output:- 4
// console.log(3**2); output:- 9
// for non-integer number as well
// console.log(4**1/2); output:- 2  power of 1/2 is the same as a square root

// String concatenation with binary +
// In case of String binary + is used for marge the string
// let fullName = "Ashutosh " + "Kumar " + "Singh"
// console.log(fullName); Output:- Ashutosh Kumar Singh

// If any of the operand is String than the other one is also string.
// let fullName = "Ashutosh " + 14 + 7 + 2001;
// console.log(fullName); Output:- Ashutosh 1472001  If the first operand is string than the other two are also string.
// console.log(2+2+'1'); Output: 41
// console.log('1'+2+2); Output: 14
// console.log(5 - '1'); Output: 4
// console.log('3' - '1'); output: 2
// console.log('6' / '2'); Output: 3

// Numeric Conversion , unary +
// The plus operator doesn't do any thing to the number but if the operand is not a number unary + convert it into the number.
// let x = 1;
// alert(+x); output: 1
// let y = -2;
// alert(+y); output: -2
// let a = true;
// alert(+a); output: 1
// let a = "";
// alert(+a); output: 0

// Operator precedence:-
// If an expression has more than one operator, the execution order is defined by their precedence. Parentheses override any precedence.

// Assignment:-assignment = is also an operator.It has a very low priority. 
// let x = 2*2+1;    In this variable the calculation is done first than the value is assign to the variable.
// console.log(x);  output: 5
// Assignment = returns a value:-
// All operators in js return a value. That's obisous for + and -, but also true for =.
// let a = 1;
// let b = 2;
// let c = 3 - (a = b+1);
// console.log(a);
// console.log(c);

// Chaining assignments:- chaining assigment is work from left to right. 
// let a, b, c;
// a=b=c= 2+2;
// console.log(a); 4
// console.log(b); 4
// console.log(c); 4

// Modify-in-place:- we often need to apply an operator to a variable and store the new result in that same variable. 
// let n = 2;
// n = n + 5;
// n = n * 2;
// console.log(n); output: 14

// shortened
// let n = 2;
// n += 5;
// n *= 2;
// console.log(n); output:- 14
// Such operators have the same precedence as a normal assignment, so they run after most other calculation:
// let n = 5;
// n += 5+3;   right part evaluated first, same as n *= 8
// console.log(n);  output: 13;


// Increment/ Decrement:-
// Increment: ++ increases a variable by 1
// let count = 5;
// count++;    works the same as count = count + 1, but in shorter
// count++;
// console.log(count);  Output:- 7
// Decrement:- -- decreases a variable by 1
// let count = 5;
// count--;    works the same as count = count - 1, but in shorter
// count--;
// console.log(count);  Output:- 3

// Tasks: 1
// What are the final values of all variables a, b, c and d after the code below?

// let a = 1, b = 1;
// let c = ++a;
// let d = b++;
// console.log(c);   // 2
// console.log(d);   // 1

// Task: 2
// What are the values of a and x after the code below?

// let a = 2;
// let x = 1 + (a *= 2);
// console.log(a);  output: 4
// console.log(x);  output: 5

// Task: 3
// What are results of these expressions?

// let a = "" + 1 + 0;
// console.log(a);   //10

// let a = "" - 1 + 0;
// console.log(a);   //-1

// let a = true + false;
// console.log(a);  //1    when the js see the + operator with boolean, it convert it into the number than true = 1 and false = 0

// let a = 6 / "3";
// console.log(a);  //2

// let a = "2" * "3";
// console.log(a);  //6

// let a = 4 + 5 + "px";
// console.log(a);   //9px

// let a = "$" + 4 + 5;
// console.log(a);  //45px

// let a = "4" - 2;
// console.log(a);   //2

// let a = "4px" - 2;
// console.log(a);  //NaN    js tries to convert "4px", 2 into the number but 4px cannot be convert into the number.

// let a = "  -9  " + 5;
// console.log(a);  // -9 5

// let a = "  -9  " - 5;
// console.log(a);  // -14

// let a = null + 1;
// console.log(a);  //1    js convert the null into the number and the output will be 0  than 0 + 1 = 1

// let a = undefined + 1;
// console.log(a);  //NaN   js tries to convert undefined into a number but it is not possible.

// let a = " \t \n" - 2;
// console.log(a);  //-2  js tries to convert whitespace into a number and the number we get is 0 thats why 0 - 2 = -2


// Task: 4
// Here’s a code that asks the user for two numbers and shows their sum.
// It works incorrectly. The output in the example below is 12 (for default prompt values).
// Why? Fix it. The result should be 3.
// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);
// alert(a + b); 

// Solution-1 
// let a = Number(prompt("First number?", 4));
// let b = Number(prompt("Second number?", 4));
// alert(a + b); //8

// Solution-2 use unary
// let a = +(prompt("First number?", 4));
// let b = +(prompt("Second number?", 5));
// alert(a + b);  //9


// Task: 5
// 2 numbers lo, unpe +, -, *, /, % (modulus) apply karke console.log karo
// let a = 1;
// let b = 2;
// console.log(a+b); //3
// console.log(a-b); //-1
// console.log(a*b); //2
// console.log(a/b); //0.5
// console.log(a%b); //1

// Task:6 
// 5 == "5" aur 5 === "5" dono compare karo, console.log(true/false dekho)
// 5 == "5" It is true because == is only check values not datatype
// 5 === "5" It is false becasue === is check values as well as datatype.

// Task:7
// && aur || use karke 2 conditions check karo (jaise age > 18 && isEmployed)
// let age = 19;
// let isEmployeed = true;
// if(age >=18 || isEmployeed){
//     console.log("You are a men");
// }
// else{
//     console.log("You are a boy");
// }

// Task:8 
// Number("42"), String(42), Boolean(0) — teeno try karo, output dekho
// let a = Number("42");
// console.log(a);  //42 Number

// let a = String(42);
// console.log(a);  //42  String

// let a = Boolean(0);
// console.log(a);  //false boolean