// My first program
// console.log(`Hello World`);

// "use strict"; // it doesn't let you mistake

/* <----------------------1.introduction to variables---------------------->*/

// variables can store some information
// we can use that information later
// we can change that information later

// 1. declare a variable
// var firstName = "Akash Saini";

// use a variable
// console.log(firstName);

// change value
// var firstName = "Akash";
// console.log(firstName);

// rules for naming variables

// you cannot start with number
// example :-
// 1value (invalid)
// value1 (valid)
// var value1 = 10;
// console.log(value1 * 10);

// you can use only underscore_ or dollar($) symbol
// example:
// first_name (valid)
// _firstname (valid)
// first$name (valid)
// $firstname (valid)

// you cannot use spaces
// var first_name = "Akash" // snake case writing
// var firstName = "Akash" // camel case writing
// first name (invalid)

// convention:
// Start with small letter and use camelCase

// 2. let keyword
// declare variable with let keyword

// var firstName = "Akash";
// var firstName = "Akky"; (valid)

// let firstName = "Akash";
// let firstName = "Akky"; (invalid)
// firstName = "Akky"(valid)

// 3. declare constants (it can't be change)
// const pi = 3.14;
// console.log(pi);

// <----------------------2.String indexing---------------------->

// let firstName = "Akash";
// A k a s h
// 0 1 2 3 4
// console.log(firstName[4]);

// length of string
// firstName.length
// console.log(firstName.length);

// last Index : length - 1
// console.log(firstName[firstName.length - 2])

// <----------------------3.String methods---------------------->

// 1. trim()
// 2. toUpperCase()
// 3. toLowerCase()
// 4. slice()

// let firstName = "  Akash  ";
// console.log(firstName.length);
// newName = firstName.trim();
// console.log(newName.length);
// or
// let newString = firstName.trim();
// console.log(newString.length);
// lower and upper case
// console.log(firstName.toUpperCase());
// console.log(firstName.toLowerCase());
// slicing
// let newString = firstName.slice(1, 4);
// console.log(newString);

// <----------------------4.Primitive Data Type---------------------->

// number 2, 4, 5.7
// null
// booleans
// BigInt
// string "Akash"
// symbol
// undefined

// let age = 23;
// let firstName = "Akash"
// console.log(typeof firstName);
// console.log(typeof age);

// convert number to string
// age = age + ""; or age = String(age);
// console.log(typeof age);

//convert string to number
// let age = "33";
// age = Number(age); or age = +"33"
// console.log(typeof age);

// string concatenation

// let str1 = "Akash"
// let str2 = "Saini"
// let fullName = str1 + " " + str2;
// console.log(fullName);

// template string
// let age = 23;
// let firstName = "Akash Saini"
// "my name is Akash Saini and my age is 23"
// let aboutMe = "my name is " + firstName + " and my age is " + age
// or
// let aboutMe = `my name is ${firstName} and my age is ${age}`;
// console.log(aboutMe);

// undefined
// let firstName;
// var firstName2;
// const firstName3;
// console.log(firstName3)
// console.log(firstName2)

// null
// let myVariable = null;
// console.log(myVariable);
// myVariable = "Akash";
// console.log(myVariable, typeof myVariable);

// console.log(typeof null); // it shows object .....this is a bug in javascript

// BigInt
// console.log(Number.MAX_SAFE_INTEGER); // output :  9007199254740991 (It's a largest number which can be stored in javascript) can be written as Nine quadrillion, seven trillion, one hundred ninety-nine billion, two hundred fifty-four million, seven hundred forty thousand, nine hundred ninety-one.

// let myNumber = BigInt(123);
// let sameMyNumber = 123n;
// console.log(myNumber);
// console.log(myNumber + sameMyNumber); // BigInt can be add with BigInt only.

// <-------5. Booleans (1.True 2.False) & Comparison Operator (<,>,=,==,===, !=,!==)-------->

// let num1 = 7;
// let num2 = "8";
// console.log(num1 >= num2)

// == vs ==== (== check vlue only but === check vlue and data type both)
// console.log(num1 === num2)

// != vs !== (!= check vlue only but !== check vlue and data type both)
// console.log(num1 !== num2)

// truthy and falsy values

// falsy values
// 1. false
// 2. ""
// 3. null
// 4. undefined
// 5. 0

// truthy values
// 1. "abc"
// 2. 1, -2
