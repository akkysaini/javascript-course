/* <------------------------31. Functions in JavaScript------------------------->*/

// 1.
// function singHappyBirthday() {
//     console.log("Happy Birthday to You");
// }
// singHappyBirthday();

// 2.
// function sumTwoNumbers(num1, num2) {
//     return num1 + num2;
// }
// console.log(sumTwoNumbers(2, 5));

// 3.
// function isEven(number) {
//     if(number % 2 === 0){
//         return "Yes! This is even number.";
//     }else{
//         return "No! This is odd number.";
//     }
// }
// console.log(isEven(289));

// 4.
// function firstChar(anyString) {
//     return anyString[0];
// }
// console.log(firstChar("Akash"))

// 5. v.imp function
// function findTarget(array, target) {
//     for (let i = 0; i <= array.length; i++) {
//         if (array[i] === target) {
//             return `Array me ${array[i]} ki index ${i} hai` ;
//         }
//     }
//     return "Number To Dekhkar Daal";
// }
// const myArray = [2, 5, 4, 63, 66];
// const ans = findTarget(myArray, 5);
// console.log(ans);

/* <------------------------32. Functions Expression------------------------->*/

// 1.
// function singHappyBirthday() {
//     console.log("Happy Birthday to You"); // This is function declaration
// }
// singHappyBirthday();
// const singHappyBirthday = function(){
//     console.log("Happy Birthday to You");     // This is function Expression
// }
// singHappyBirthday();

// 2.
// function sumTwoNumbers(num1, num2) {
//     return num1 + num2;                    // This is function declaration
// }
// console.log(sumTwoNumbers(2, 5));

// const sumTwoNumbers = function(num1,num2){
//         return num1 + num2;                       // This is function Expression
// }
// const ans = sumTwoNumbers(234,235)
// console.log(ans)

// 3.
// const isEven = function(number){
//     return number % 2 === 0;
// }
// console.log(isEven(71));

// 4.
// const firstChar = function(anyString) {
//     return anyString[0];
// }
// console.log(firstChar("Akash"))

/* <------------------------33. Arrow Functions------------------------->*/

// 1.
// const singHappyBirthday = () => {
//     console.log("Happy Birthday to You");     // This is Arrow function
// singHappyBirthday();

// 2.
// const sumTwoNumbers = (num1,num2) => {
//         return num1 + num2;
// }
// const ans = sumTwoNumbers(234,235)
// console.log(ans)

// 3.
// const isEven = number => {
//     return number % 2 === 0;              // or
// }
// const isEven = number => number % 2 === 0;        // if we take one input only then we can remove parethesis and curly braces in arrow function
// console.log(isEven(72));

// 4.
// const firstChar = (anyString) => {
//     return anyString[0];                  //or
// // }


/* <------------------------34. Functions Inside Functions------------------------->*/

// const app = () => {
//     const myFunc = () => {
//         console.log("Hello from myfunc")
//     }
//     const addTwo = (num1, num2) =>{
//         return num1 + num2 ;
//     }
//     const mul = (num1, num2) => num1 * num2 ;
//     console.log("Inside app");
//     myFunc();
//     console.log(addTwo(223,234));
//     console.log(mul(34,53));
// }
// app();


/* <------------------------35. Lexical scope------------------------->*/
// A lexical scope in JavaScript means that a vaiable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; the variable defined inside a function will not be accessible outside that function.

// const myVar = "value1";
// function myApp(){
//     function myFunc(){
//         const myVar = "value 23";
//         console.log("inside myFunc", myVar);
//     }
//     console.log(myVar);
//     myFunc();
// }
// myApp();

/* <------------------------36. Block Scope vs Function(Global) Scope ------------------------->*/

// let and const are block scope : we cant't access let and const outside the curly braces.
// var is fuction(global) scope :   we can access outside the curly braces.


/* <------------------------37. Default Parameters------------------------->*/

// function addTwo(a,b=2){
//     return a+b;
// }
// const ans= addTwo(23);    // here we can define value of b also then that will be default value
// console.log(ans);

/* <------------------------38. Rest Parameters------------------------->*/

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is ${c}`)
// }
// myFunc(3,2,4,346,656,34);      // here c will contain all remaining values apart from  first two vlues.

// 2.
// function addAll(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total = total + number;
//     }
//     return total;
// }
// const ans = addAll(4,6,7);
// console.log(ans);

/* <------------------------39. Parameter Destructuring------------------------->*/
// Object
// It's important for React

// const person = {
//     firstName: "Akash",
//     gender: "male",
//     age: 22,
// };

// function printDetails(obj) {
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     console.log(obj.age);
// }
// or
// function printDetails({ firstName, gender, age }) {
//     console.log(firstName);
//     console.log(gender);
//     console.log(age);

// }
// printDetails(person);


/* <------------------------40. Callback Functions------------------------->*/
// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished.

// function myFunc2(name) {
//     console.log("Inside my func 2");
//     console.log(`your name is ${name}`);
// }

// function myFunc(callback) {
//     console.log("Hello there I'm myfunc");
//     callback("Akash");
// }
// myFunc(myFunc2);


/* <------------------------41. Function returning Function------------------------->*/

// function myFunc() {
//     function hello() {
//         console.log("Hello World");
//     }
//     return hello;
// }
// // myFunc();
// const ans = myFunc();
// ans();





