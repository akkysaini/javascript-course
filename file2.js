/* <--------------------6. If Else Statement-----------------> */
// if else condition
// 1.
// let age = 17;

// if (age >= 18) {
//     console.log("User can play game");
// } else {
//     console.log("User cannot play game");
// }

// 2.
// let num = 8;
// if (num % 2 === 0) {
//     console.log("This is an Even number")
// } else {
//     console.log("This is an Odd number")
// }

// <----falsy values------>
// 1. false
// 2. ""
// 3. null
// 4. undefined
// 5. 0

// <------truthy values----->
// 1. "abc"
// 2. 1, -2


// let firstName = 0;
// if (firstName) {
//     console.log(firstName);
// } else {
//     console.log("First kinda empty")
// }

// <--------7. Ternary Operator (Connditional Operator)------>
// without ternary operator
// let age = 8;
// let drink;

// if (age >= 5) {
//     drink = "coffee";
// } else {
//     drink = "milk";
// }
// console.log(drink);

// with ternary operator
// let age = 4;
// let drink = age >= 5 ? "coffee" : "milk";
// console.log(drink);

// <---------8. And(&&) & Or(||) Operator--------->

// let firstName = "akash";
// let age = 18;
// // and operator
// if (firstName[0] === "A" && age >= 18) {
//     console.log("Your name starts with A and you're above 18")
// } else {
//     console.log("Your are not eligible")
// }
// // or operator
// if (firstName[0] === "A" || age >= 18) {
//     console.log("Inside If")
// } else {
//     console.log("Inside Else")
// }


// <----------------------9. Nested If Else------------------------->

/* 1.
conditions
winning number 19
19 your guess is right
15 too low
20 too high

let winningNumber = 19;
let userGuess = +prompt("Guess a number"); // prompt take number in string so now we've to convert in number by adding (+) before prompt
if (userGuess === winningNumber) {
    console.log("Your guess is right")
} else {
    if (userGuess <= winningNumber) {
        console.log("Your guess is too low")
    } else {
        console.log("Your guess is too high")
    }
}
*/


//  if
//  else if
//  else if
//  else if
//  else

// 1. Let's play a number
// let myAge = 22;
// let userGuess = +prompt("Guess my age");

// if(userGuess === myAge){
//     console.log("Yes! You are right");
// }else if(userGuess < myAge){
//     console.log("Very Low Number")
// }else{
//     console.log("Very High Number")
// }


// let's check Wheather Outside
// 2.
// let temInDegree = -11;
// if (temInDegree < 0) {
//     console.log("extremely cold outside");
// } else if (temInDegree < 16) {
//     console.log("It is cold outside");
// } else if (temInDegree < 25) {
//     console.log("Wheater is okay");
// } else if (temInDegree < 35) {
//     console.log("lets go for swim");
// } else if (temInDegree < 45) {
//     console.log("turn on the AC");
// } else {
//     console.log("too hot!!")
// }

/* <-----------------10. Switch Statement------------------>*/

// Use of if else
// let day = 6;
// if (day === 0) {
//     console.log("Sunday");
// } else if (day === 1) {
//     console.log("Monday");
// } else if (day === 2) {
//     console.log("Tuesday");
// } else if (day === 3) {
//     console.log("Wednesday");
// } else if (day === 4) {
//     console.log("Thrusday");
// } else if (day === 5) {
//     console.log("Friday");
// } else if (day === 6) {
//     console.log("Saturday");
// } else {
//     console.log("Invalid Day");
// }

/*<------------Use of Switch Statement---------------->*/
// let day = 6;

// switch (day) {
//     case 0:
//         console.log("Sunday");
//         break;
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
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid Day");
// }

/*<-------------------------11. Loops in JavaScript-------------------------->*/
// There are seven kinds of loops in javascript.
// 1. For loop
// 2. For in loop
// 3. For of loop
// 4. While loop
// 5. Do While loop
// 6. forEach()
// 7. map()


/*<-------------------------For Loop-------------------------->*/
// print 0 to 9

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// example of For Loop
// 1.
// let total = 0;
// let num = 100;
// for (let i = 1; i <= num; i++) {
//     total = total + i;
// }
// console.log(total)

// 2. break keyword
// for (let i = 0; i <= 10; i++) {
//     if (i === 9){
//         break;
//        }
//     console.log(i);
// }


// 3. Continue keyword
// for (let i = 0; i <= 10; i++) {
//     if (i === 9){
//         continue;
//     }
//     console.log(i);
// }
// console.log("Hello World")


// <------------------While loop--------------------->
// let i = 0;
// while (i <= 9) {
//     console.log(i);
//     i++;
// }
// console.log(`Now vlue of i is ${i}`)

// while loop example
// let total = 0;
// // let num = 1000;
// let i = 0;
// while (i <= 100) {
//     total = total + i;
//     i++;
// }
// console.log(total)

// Mathematics formula for  above while loop
// let num = 10;
// let total = (num * (num + 1) / 2);
// console.log(total)

/* <------------------------Do While Loop-------------------------->*/
// let i = 0;
// while (i <= 9) {
//     console.log(i);
//     i++;
// }

// let i = 0;
// let num = 10;
// do {
//     console.log(i);
//     i++;
// } while (i <= num);

// console.log("value of i is ", i)


