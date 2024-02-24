/* <----------------------------------42. Important Array methods------------------------------>*/
// 1. forEach
// 2. map            // V. Imp
// 3. filter
// 4. reduce
// 5. sort
// 6. find
// 7. every
// 8. some
// 9. fill
// 10. splice

/*<------------------------------------1.forEach method------------------------------------->*/
// 1. here forEach method will parse two arguments to any callback function from an array, first will be array's first item and second will be index. it'll work same as loop.
// 2. we can pass any function to forEach as parameter (callback)


// const numbers = [4, 2, 5, 3];

// function myFunc(number, index) {
//     console.log(`Index is ${index} and number is ${number}`);
// }

// for (let i = 0; i < numbers.length; i++) {
//     myFunc(numbers[i], i);                     // or
// }

// numbers.forEach(myFunc);

// Examples:
// 1.
// const myArray = [2,4,6,8,10];
// myArray.forEach((number,index)=>{                  // Here If we pass only one parameter in function then it will take item from an array.
//     console.log(`The number is ${number} and index is ${index}`);
//     console.log(`${number}*20 =`, number*20)
// })


// 2.

// const users = [
//     { firstName: "Akash", age: 22 },
//     { firstName: "Rajat", age: 20 },
//     { firstName: "Lakhan", age: 19 },
//     { firstName: "Mohit", age: 21 },
// ]
// now we've to print all firstName and age with serial number from users array

// users.forEach(function ({ firstName, age },index) {
//     console.log(`${index+1}. First Name is ${firstName} and age is ${age}`);
// })


/*<------------------------------------2.Map method------------------------------------->*/
// map() creates a new array from calling a function for every array element. map() calls a function once for each element in an array. map() does not execute the function for empty elements. map() does not change the original array.
// It's important for React
// Map method works similar forEach method
// Map method always return a new array
// we have to use return keyword in callback function for map method. it's crucial

// const numbers = [3, 4, 6, 1, 8];

// const square = function (number) {
//     return number * number;    
// }                                             
// const squareNumber = numbers.map(square);
// console.log(squareNumber);

// we can use function or arrow function in map method also
// example:

// const numbers = [3, 4, 6, 1, 8,11,12,14,55];
// const squareNumber = numbers.map((number, index) => {
//     return `${index+1}-> ${number}*${number} = ${number * number}`;
// })
// console.log(squareNumber)

// Let's see real life example:

// const users = [
//     { firstName: "Akash", age: 22 },
//     { firstName: "Rajat", age: 20 },
//     { firstName: "Lakhan", age: 19 },
//     { firstName: "Mohit", age: 21 },
// ]
//    now we've to print all firstName from users array
// Let's use arrow function in map method

// const userNames = users.map((users , index) => {
//     return `${index+1}-> firstName is ${users.firstName} and age is ${users.age}`;
// })
// console.log(userNames)

// <==========Difference between forEach() and map() method==========>*/
// The forEach() method does not return a new array, whereas the map() method returns a new array. The map() method is used to transform the elements of an array, whereas the forEach() method is used to loop through the elements of an array

/*<------------------------------------3.Filter method------------------------------------->*/
// The filter() method is an iterative method. It calls a provided callbackFn  once for each element in an array, and constructs a new array of all the values for which callbackFn returns a truthy value.
// Filter method always return a new array
// The callback function of filter() method should always return a boolean value. 

// const numbers = [1, 3, 5, 2, 56, 6,];

// // Let's find out Even numbers from numbers

// const isEven = (number) => {
//     return number % 2 === 0;
// }
// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);

// // Let's find out Odd numbers from numbers

// const oddNumbers = numbers.filter((number) => {
//     return number % 2 !== 0;
// });
// console.log(oddNumbers);

/*<------------------------------------4.Reduce method------------------------------------->*/
// for me => index = accumulator

// const numbers = [1, 2, 3, 4, 5, 10];            // aim: sum of all the numbers in array
// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);                       // here 0 will be default value of accumulator , we set this according us
// console.log(sum);

// Now Let's understand reduce method's accumulator and currentValue
// accumulator,     currentValue      return
// 0                  1                1
// 1                  2                3
// 3                  3                6
// 6                  4                10
// 10                 5                15
// 15                10                25   // final result

// So Let's see real life example:

// const userCart = [
//     { productId: 1, productName: "mobile", price: 12000 },
//     { productId: 2, productName: "Laptop", price: 40000 },
//     { productId: 3, productName: "Tv", price: 10000 },
//     { productId: 4, productName: "Freeze", price: 30000 },
// ]

// const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
//     return totalPrice + currentProduct.price;
// },0)
// console.log(totalAmount);

// // Now Let's understand totalPrice and currentProduct values
// // totalPrice,     currentProduct      return
// // 0                  12000             12000
// // 12000              40000             52000
// // 52000              10000             62000
// // 62000              30000             92000


/*<------------------------------------5.Sort method------------------------------------->*/
// Sort Method change original Array .........It's an interview question
// This method sort an array just like dictionary
// Char: ascii value

// Ascii Table

// '0' : 48     // ':' : 58
// '1' : 49     // ';' : 59
// '2' : 50     // '<' : 60
// '3' : 51     // '=' : 61
// '4' : 52     // '>' : 62
// '5' : 53     // '?' : 63
// '6' : 54     // '@' : 64
// '7' : 55
// '8' : 56
// '9' : 57

// 'A' : 65     // '[' : 91     // 'u' : 117
// 'B' : 66     // '\' : 92     // 'v' : 118
// 'C' : 67     // ']' : 93     // 'w' : 119
// 'D' : 68     // '^' : 94     // 'x' : 120
// 'E' : 69     // '-' : 95     // 'y' : 121
// 'F' : 70     // '`' : 96     // 'z' : 122
// 'G' : 71     // 'a' : 97     // '{' : 123
// 'H' : 72     // 'b' : 98     // '/' : 124
// 'I' : 73     // 'c' : 99     // '}' : 125
// 'J' : 74     // 'd' : 100
// 'K' : 75     // 'e' : 101
// 'L' : 76     // 'f' : 102
// 'M' : 77     // 'g' : 103
// 'N' : 78     // 'h' : 104
// 'O' : 79     // 'i' : 105
// 'P' : 80     // 'j' : 106
// 'Q' : 81     // 'k' : 107
// 'R' : 82     // 'l' : 108
// 'S' : 83     // 'm' : 119
// 'T' : 84     // 'n' : 110
// 'U' : 85     // 'o' : 111
// 'V' : 86     // 'p' : 112
// 'W' : 87     // 'q' : 113
// 'X' : 88     // 'r' : 114
// 'Y' : 89     // 's' : 115
// 'Z' : 90     // 't' : 116

// Examples of sort method:
// 1.
// const userNames = ["ravi", "sunny", "Akash", "harshit", "nitish", "Banti", 22, "akky", "ravi", "ABC"];
// userNames.sort();
// console.log(userNames);

// 2.
// const numbers = [3, 5, 5000, 6, 1000, 56]
// // numbers.sort(); // this method is not giving expected output so here we can use a function
// numbers.sort((a, b) => {
//     return a - b;          // here we are getting correct order of numbers
// })
// console.log(numbers);

// 3. real life example
// const product = [
//     { productId: 1, productName: "p1", price: 300 },
//     { productId: 2, productName: "p2", price: 3000 },
//     { productId: 3, productName: "p3", price: 200 },
//     { productId: 4, productName: "p4", price: 8800 },
//     { productId: 5, productName: "p5", price: 500 },
// ]
// console.log(product);
// // because sort method change original array so we will use slice method
// // LowToHigh
// const lowToHigh = product.slice(0).sort((a, b) => a.price - b.price);
// console.log(lowToHigh);
// // HighToLow
// const highToLow = product.slice(0).sort((a, b) => b.price - a.price);
// console.log(highToLow);


/*<------------------------------------6.Find method------------------------------------->*/
// 1.
// const myArray = ["Hello", "cat", "dog", "Lion"];
// const findThree = myArray.find((string) => string.length === 3)
// console.log(findThree);

// 2. realistic example:
// const users = [
//     { userId: 1, userName: "Akash" },
//     { userId: 2, userName: "Rahul" },
//     { userId: 3, userName: "Virat" },
//     { userId: 4, userName: "Abhay" },
//     { userId: 5, userName: "Lucky" },
// ];
// // Let's find a user who have Id no. 3
// const find3 = users.find((user) => user.userId === 3);
// console.log(find3);


/*<------------------------------------7.Every method------------------------------------->*/
// this method returns boolean value(true,false) when all the values will be satisfied.

// 1.In this example we'll check "are all the numbers even in this array "
// const numbers = [2, 4, 6, 8, 10];
// const isEven = numbers.every((number) => number % 2 === 0);
// console.log(isEven);

// 3. Realistic example: here we'll check "Is every product price < 10000"
// const product = [
//     { productId: 1, productName: "p1", price: 300 },
//     { productId: 2, productName: "p2", price: 3000 },
//     { productId: 3, productName: "p3", price: 200 },
//     { productId: 4, productName: "p4", price: 8800 },
//     { productId: 5, productName: "p5", price: 500 },
// ]
// const less10k = product.every((less10k) => less10k.price < 10000);
// console.log(less10k);

/*<------------------------------------8.Some method------------------------------------->*/
// this method returns boolean value(true,false) when even one value will be satisfied.

// 1. In this example we'll check "Is some product's price > 8000"

// const product = [
//     { productId: 1, productName: "p1", price: 300 },
//     { productId: 2, productName: "p2", price: 3000 },
//     { productId: 3, productName: "p3", price: 200 },
//     { productId: 4, productName: "p4", price: 8800 },
//     { productId: 5, productName: "p5", price: 500 },
// ]
// const greater8k = product.some((greater8k) => greater8k.price > 8000);
// console.log(greater8k);


/*<------------------------------------9.Fill method------------------------------------->*/
// This method change original array also
// vlue, start, end

// 1. here we'll get an array which contains 10 elements with value of 2
// const myArray = new Array(10).fill(2);
// console.log(myArray);

// 2. here we'll change an array's three values with 0
// const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
// myArray.fill(0, 2, 5);
// console.log(myArray);


/*<------------------------------------10.Splice method------------------------------------->*/
// This method change original array also
// This method use for delete or insert in the middle/wherever of an array

// start, delete, insert

// const myArray = ["item1", "item2", "item3"];

// 1.
// delete: here we'll delete item2 with the help of index number
// const delete1 = myArray.splice(1, 1);
// console.log(myArray);
// we can get deleted item also
// console.log("deleted item is", delete1)

// 2.
// insert : here we'll insert item4 at last
// const insert1 = myArray.splice(3, 0, "item4");
// console.log(myArray);

/*<------------------------------------Difference between Slice() and Splice()------------------------------------->*/

// slice returns a piece of the array but it doesn't affect the original array. 
//splice changes the original array by removing, replacing, or adding values and returns the affected values.


/*<------------------------------------43. iterables------------------------------------->*/
// jispe hum for of laga sake voh iterables hote hain.
// string, array are iterable

// examples:
// 1.
// const firstName = "Akash";
// for (let char of firstName) {
//     console.log(char);
// }

// 2.
// const items = ['item1', 'item2', 'item3'];
// for (let item of items) {
//     console.log(item);
// }

// 3. Let's check "is object iterable ?"
// const users = {
//     user1: "abc",
//     user2: "sdfh",
//     user3: "xyz",
// };
// for (let user of users) {
//     console.log(user);
// }                            // So, Objects are not iterable


/*<------------------------------------44. Array like Object------------------------------------->*/
// jikne pas length property hoti hai
// aur jinhe hum index se access kar sakte hain
// example :- string

// 1.
// const firstName = "Akash";
// console.log(firstName.length);
// console.log(firstName[2]);


/*<------------------------------------45. Sets(It is iterable)------------------------------------->*/
// store data
// sets also have its own methods
// no index based access
// order is not guaranteed
// unique items only (no duplicate allowed), set will ignore that

// examples:
// 1.
// const items = ['item1', 'item2', 'item3']
// const numbers = new Set([1, 2, 3]);
// numbers.add(4);
// numbers.add(items);            // or
// numbers.add(['item1', 'item2'])
// numbers.add(['item1', 'item2']) // even this will be add also because it has different address in memory
// // console.log(numbers);
// // now apply for of loop on it
// for (let number of numbers) {
//     console.log(number);
// }

// 2.
// const myArray = [1, 2, 3, 4, 5, 5, 6, 4, 6];
// const uniqueElements = new Set(myArray);
// console.log(uniqueElements);
// console.log(myArray);
// // let's check length of uniqueElement
// let length = 0;
// for (let element of uniqueElements) {
//     length++;
// }
// console.log(length);



























