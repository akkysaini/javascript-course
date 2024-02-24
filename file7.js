/*<------------------------------------How JavaScript Works------------------------------------->*/
// ● Global Execution context
// ● This and window in global execution context
// ● Hoisting
// ● Are let and const are hoisted ? What is a reference Error ?
// ● Function execution context
// ● Scope chain and lexical environment
// ● Intro to closures
// ● Closure example 1
// ● Closure Example 2
// ● Closure Example 3

/*<------------------------------------Global Execution context------------------------------------->*/
// There is two phase for code execution in javascript
// 1. Compilation phase (it's for early error checking and it checks which variable belongs to which scope)
// 2. Code Execution phase (Before code execution , javascript create a global execution context and it store in a stack)

// how javascript code execute
// Examples :-
// 1.
// console.log(this);
// console.log(window);
// console.log(myFunction);
// myFunction();
// console.log(fullName);
// function myFunction() {                             // function declaration:-
//     console.log("this is inside of myFunction");
// }
// var firstName = "Akash";           // var ke case me code ko execute karne se pehle isski value undefined set ho jati hai
// var lastName = "Saini";
// var fullName = firstName + " " + lastName;
// console.log(fullName);
//        // output of above code:
//        // {window object}    in browsers the value of 'this' is equals to window object
//        // {window object}
//        // fuction myFunction(){
//        //  console.log("this is inside of myFunction")
//        //  }
//        // undefined
//        // Akash Saini

/*<------------------------------------What is Hoisting------------------------------------->*/
// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
// Hoisting allows functions, variables or classes to be safely used in code before they are declared.

// What happens in case of function expression
// Examples :-
// 1.
// console.log(myFunction);
// var myFunction = function () {
//   // function expression :-
//   console.log("this is inside of myFunction");
// };
// console.log(myFunction);

/*<---------------------Are let and const hoisted ?------------------------>*/
// yes these are hoisted also.
// Let and Const ke case me code ko execute karne se pehle inki value uninitialized set ho jati hai (execution ke baad inkin value initiailzed ho jati hai)
// Example :-
// 1.
// console.log(firstName); // hence it will give an initialization error
// let firstName = "Akash";

/*<------------------------------------Function execution context------------------------------------->*/

// let foo = "foo";
// console.log(foo);
// function getFullName(firstName, lastName) {
//     console.log(arguments);
//     let myVar = "var inside func";
//     console.log(myVar);
//     const fullName = firstName + " " + lastName;
//     return fullName;
// }

// const personName = getFullName("Akash", "Saini");
// console.log(personName);
//         // output of this code:-
//         // foo
//         // Arguments = ["Akash", "Saini"]
//         // var inside func
//         // Akash Saini

/*<------------------------------------Scope chain and Lexical environment------------------------------------->*/
// A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration.
// But the opposite is not true; the variables defined inside a function will not be accessible outside that function.
// Examples:-

// const lastName = "Saini";
// const printName = function () {
//     const firstName = "Akash";
//     function myFunction() {
//         console.log(firstName);
//         console.log(lastName);
//     }
//     myFunction();
// }
// printName();
//         // output
//         // Akash
//         // Saini

/*<------------------------------------Closures in JavaScript------------------------------------->*/
// A closure is  the combination of a function bundled togther (enclosed) with references to its surrounding state (the lexical environment).
// In Other words, A CLOSURE GIVES YOU ACCESS TO AN OUTER FUNCTION'S SCOPE FROM AN INNER FUNCTION.

// 1.
// Function can return functions
// function outerFunction() {
//   function innerFunction() {
//     console.log("Hello World");
//   }
//   return innerFunction;
// }
// const ans = outerFunction();
// console.log(ans);
// ans();

// 2.
// function printFullName(firstName, lastName) {
//     function printName() {
//         console.log(firstName, lastName);
//     }
//     return printName;
// }
// const ans = printFullName("Akash", "Saini");
// ans();

// 3.
// function hello(x) {
//     const a = "varA";
//     const b = "varB";
//     return function () {
//         console.log(a, b, x)
//     }
// }
// const ans = hello("arg");
// ans();

// 4. Square Function
// function myFunction(power) {
//     return function (number) {
//         return number ** power;
//     }
// }

// const square = myFunction(2);
// const ansSquare = square(324);     // output should be 104976
// console.log(ansSquare);

// // 5. Cube Function
// // function myFunction(power) {
// //     return function (number) {
// //         return number ** power;
// //     }
// // }
// // or
// const myFunctionOfCube = (power) => (number) => number ** power;

// const cube = myFunctionOfCube(3);
// const ansCube = cube(324);    // output should be 34012224
// console.log(ansCube);
// console.log(34012224 / 324);

// 6. closure application : which tells us how many times we've called this function
// function func() {
//     let counter = 0;
//     return function () {
//         if (counter < 1) {
//             console.log("Hi You called me !!");
//             counter++;
//         } else {
//             console.log("I've called already !!");
//         }
//     }
// }
// const myFunc = func();
// myFunc();
// myFunc();
// const myFunc2 = func();
// myFunc2();
// myFunc2();
