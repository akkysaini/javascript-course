/* <---------------Synchronous programming vs Ashynchronous programming------------------>*/

// JavaScript is a synchronous programming and single threaded language.
// synchronous programming : In synchronous means ( The program moves to the next step when the current step has completed execution and has returned an outcome.)

// console.log("Script Start");
// for (let i = 1; i < 10000; i++) {
//     console.log("Inside for loop");
// }
// console.log("Script End");

// Ashynchronous Prgramming : a program to continue running other code while waiting for a long-running task to complete
// <------------------------setTimeout--------------------------->
// 1.
// console.log("Script Start");
// // function hello() {
// //     console.log("Hello World");
// // }
// // setTimeout(hello, 1000);            // here 1000ms means 1sec delay
// // or
// const id = setTimeout(() => {
//     console.log("Inside setTimeout");        // setTimeout hendle Browser not javaScript
// }, 0)
// for (let i = 1; i < 100; i++) {
//     console.log("Hello World");
// }
// console.log("setTimeout id is : ", id);
// console.log("Clearing timeout")
// clearTimeout(id);              // It will stop setTimeout
// console.log("Script End");

// <------------------------setInterval--------------------------->
// 1.
// console.log("Script Start");
// setInterval(() => {
//     let total = 0;
//     for (let i = 0; i < 1000000000; i++) {
//         total += i;
//     }
//     console.log(total);
//     console.log(Math.floor(Math.random() * 10))
// }, 1000)
// console.log("Script End");

// 2. There is saparate example for setInterval Example

/* <--------------------------------------Understand Callback-------------------------------------------->*/

// 1.
// function myFunc(callback) {
//     console.log("function is doing task 1");
//     callback();
// }
// function myFunc2() {
//     console.log("function2 is doing task 2")
// }
// myFunc(myFunc2);
// or
// myFunc(() => {
//     console.log("function3 is doing task 3");
// });

// 2.
// function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure) {
//     if (typeof number1 === "number" && typeof number2 === "number") {
//         onSuccess(number1, number2);
//     } else {
//         onFailure();
//     }
// }
// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }
// function onFail() {
//     console.log("Wrong Data Type");
//     console.log("Please Enter numbers only")
// }
// getTwoNumbersAndAdd(40, 50, addTwoNumbers, onFail);

/* <----------------------------------Callbacks, Callback hell, the pyramid of doom-------------------------------------->*/
// Asynchronous Programming

// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");
// const heading8 = document.querySelector(".heading8");
// const heading9 = document.querySelector(".heading9");
// const heading10 = document.querySelector(".heading10");

// I wanna setTimeout according to table given below
// Text         Delay         Color
// One           1s           Violet
// Two           2s           Purple
// Three         2s           Red
// Four          1s           Pink
// Five          2s           Green
// Six           3s           Blue
// Seven         1s           Brown

// Callback hell
// setTimeout(() => {
//     heading1.textContent = "Heading 1";
//     heading1.style.color = "violet";
//     setTimeout(() => {
//         heading2.textContent = "Heading 2";
//         heading2.style.color = "purple";
//         setTimeout(() => {
//             heading3.textContent = "Heading 3";
//             heading3.style.color = "red";
//             setTimeout(() => {
//                 heading4.textContent = "Heading 4";
//                 heading4.style.color = "pink";
//                 setTimeout(() => {
//                     heading5.textContent = "Heading5";
//                     heading5.style.color = "green";
//                     setTimeout(() => {
//                         heading6.textContent = "Heading 6";
//                         heading6.style.color = "blue";
//                         setTimeout(() => {
//                             heading7.textContent = "Heading 7";
//                             heading7.style.color = "brown";
//                         }, 1000);
//                     }, 3000);
//                 }, 2000);
//             }, 1000);
//         }, 2000);
//     }, 2000);
// }, 1000);

// or
// function changeText(element, text, color, time, onSuccessCallback, onFailure) {
//     setTimeout(() => {
//         if (element) {
//             element.textContent = text;
//             element.style.color = color;
//             if (onSuccessCallback) {
//                 onSuccessCallback();
//             } else {
//                 if (onFailure) {
//                     onFailure();
//                 }
//             }
//         };
//     }, time);
// };
// Pyramid of doom
// changeText(heading1, "One", "violet", 2000, () => {
//     changeText(heading2, "Two", "purple", 1000, () => {
//         changeText(heading3, "Three", "red", 1000, () => {
//             changeText(heading4, "Four", "pink", 1000, () => {
//                 changeText(heading5, "Five", "green", 1000, () => {
//                     changeText(heading6, "Six", "blue", 1000, () => {
//                         changeText(heading7, "Seven", "brown", 1000, () => {
//                             changeText(heading8, "Eight", "yellow", 1000, () => {
//                                 changeText(heading9, "Nine", "cyan", 1000, () => {
//                                     changeText(heading10, "Ten", "black", 1000, () => {

//                                     }, () => { console.log("Heading10 does not exist") });
//                                 }, () => { console.log("Heading9 does not exist") });
//                             }, () => { console.log("Heading8 does not exist") });
//                         }, () => { console.log("Heading7 does not exist") });
//                     }, () => { console.log("Heading6 does not exist") });
//                 }, () => { console.log("Heading5 does not exist") });
//             }, () => { console.log("Heading4 does not exist") });
//         }, () => { console.log("Heading3 does not exist") });
//     }, () => { console.log("Heading2 does not exist") });
// }, () => { console.log("Heading1 does not exist") });

/* <----------------------------------Promises-------------------------------------->*/
// promise Object works ashycronously

// console.log("Scipt Start");
// const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

// const friedRicePromise = new Promise((resolve, reject) => {
//     if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
//         resolve("Fried Rice");  // here we can pass anything like : object , array and number
//     } else {
//         // reject("Something is missing"); // also here we can pass anything like : object , array and number
//         // or
//         // reject(new Error("Something is missing from bucket"))
//         reject("Something is missing from bucket")
//     }
// });

// friedRicePromise
// .then((myFriedRice) => {
//     // jab promise resolve hoga
//     console.log("Lets eat", myFriedRice);
// }, (error) => {
//     // jab promise reject hoga
//     console.log(`Moye Moye! ${error}`)
// });
// // or

// friedRicePromise
// .then((myFriedRice) => {
//     // jab promise resolve hoga
//     console.log("Now you can cook", myFriedRice);
// })
// .catch((error) => { console.log(error) })          // jab promise reject hoga

// console.log("Scipt End");

/* <----------------------------------Function returning Promises-------------------------------------->*/

// const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

// function ricePromise() {
//     return new Promise((resolve, reject) => {
//         if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
//             resolve("Fried Rice");
//         } else {
//             reject(new Error("Something is missing from bucket"));
//         }
//     });
// }

// ricePromise().then((myFriedRice) => {
//     console.log("Lets eat", myFriedRice);
// }).catch((error) => { console.log(error) })

/* <----------------------------------Promise && setTimeout-------------------------------------->*/

// function myPromise() {
//   return new Promise((resolve, reject) => {
//     const value = true;
//     setTimeout(() => {
//       if (value) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 2000);
//   });
// }

// myPromise()
//   .then(() => {
//     console.log("resolved");
//   })
//   .catch(() => {
//     console.log("rejected");
//   });

/* <----------------------------------Promise.resolve && Promise chaining-------------------------------------->*/
// then method always return promise

// function myPromise() {
//     return new Promise((resolve, reject) => {
//         resolve("foo")
//     })
// }

// myPromise()
//     .then(value => {
//         console.log(value);
//         value += "baar";
//         return value;   // here inside working promise "Promise.resolve(value)
//     })
//     .then((value) => {
//         console.log(value);          // because we can apply then method only on Promise
//         value += "baaz";
//         return value;
//     })
//     .then((value) => {
//         console.log(value);
//     })

/* <----------------------------------Callback hell to Flat code-------------------------------------->*/

// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");
// const heading8 = document.querySelector(".heading8");
// const heading9 = document.querySelector(".heading9");
// const heading10 = document.querySelector(".heading10");

// function changeText(element, text, color, time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (element) {
//                 element.textContent = text;
//                 element.style.color = color;
//                 resolve();
//             } else {
//                 reject("Element not found");
//             }
//         }, time)
//     })
// };

// changeText(heading1, "One", "red", 1000)
//     .then(() => {
//         return changeText(heading2, "Two", "violet", 1000);
//     })
//     .then(() => {
//         return changeText(heading3, "Three", "purple", 1000);
//     })
// or

// changeText(heading1, "One", "red", 1000)
//     .then(() => changeText(heading2, "Two", "violet", 1000))
//     .then(() => changeText(heading3, "Three", "purple", 1000))
//     .then(() => changeText(heading4, "Four", "pink", 1000))
//     .then(() => changeText(heading5, "Five", "green", 1000))
//     .then(() => changeText(heading6, "Six", "blue", 1000))
//     .then(() => changeText(heading7, "Seven", "brown", 1000))
//     .then(() => changeText(heading8, "Eight", "orange", 1000))
//     .then(() => changeText(heading9, "Nine", "cyan", 1000))
//     .then(() => changeText(heading10, "Ten", "black", 1000))
//     .catch((error) => {
//         alert(error)
//     });
