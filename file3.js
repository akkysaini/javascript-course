/* <------------12. Reference (Non-Primitive) Data Type--------------> */

// <----------13. Intorduction to Arrays----------->
// Arrays is a ordered collection of items

// let fruits = ["apple", "mango", "grapes"];
// console.log(fruits[2]);
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers);

// let mixed = [1, 3, 5, "string", null, undefined,];
// console.log(mixed);

// let fruits = ["apple", "mango", "grapes"];
// let obj = {}; // This is Object literal
// console.log(fruits);
// fruits[1] = "banana";
// console.log(fruits);

// console.log(typeof fruits)
// console.log(typeof obj)
// console.log(Array.isArray(fruits))
// console.log(Array.isArray(obj))

// <----------------14. Array Methods------------------>
// 1. Push and Pop (Push method push value in the last index of an array and pop remove last index value )
// 2. Shift and Unshift (unshift push value in the first index of an array and shift remove first index value )

// push pop example:
// let fruits = ["apple", "mango", "grapes"];
// fruits.push("Akky");
// console.log(fruits);
// let popFruit = fruits.pop();
// console.log(popFruit)
// console.log(fruits);
// console.log(typeof fruits);
// console.log(Array.isArray(fruits));

// shift unshift example:
// fruits.shift();
// console.log(fruits)
// fruits.unshift("banana")
// console.log(fruits)
// console.log(Array.isArray(fruits));

/* <----------------15. Primitive vs Reference(Non-Primitive) data types------------------> */

// primitive data type
// let num1 = 6;
// let num2 = num1;
// console.log("value of num1 is :", num1);
// console.log("value of num2 is :", num2);
// num1++;
// console.log("after increamenting num1");
// console.log("value of num1 is :", num1);
// console.log("value of num2 is :", num2);

// Reference data type
// let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log("arrar1", array1)
// console.log("arrar2", array2)
// array1.push("item3")
// console.log("after pushing element to array1");
// console.log("arrar1", array1)
// console.log("arrar2", array2)

/* <-----------------------16. How to clone and concat an  Array----------------------->*/

// let array1 = ["item1", "item2"];
// array1.push("item3");
// let array2 = ["item1", "item2"]; // this is not valid
// let array2 = [].concat(array1, ["item3", "item4"]); // or
// let array2 = [...array1, "item3", "item4"]  // This is spread operator and this is new way to clone two arrays
// let oneMoreArray = ["item3", "item4"]
// let array2 = [...array1, ...oneMoreArray]
// console.log(array1 === array2);
// console.log(array1)
// console.log(array2)

/* <-------------------------17. For Loop in Array---------------------->*/

// let fruits = ["apple", "mango", "grapes", "banana"];
// console.log(fruits.length)
// console.log(fruits[fruits.length - 1])
// console.log(fruits.slice(fruits.length - 1))
// console.log(fruits)

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i].toUpperCase())
// }
// let's store it in other variable
// let fruits2 = [];
// for (let i = 0; i < fruits.length; i++) {
//     fruits2.push(fruits[i].toUpperCase())
// }
// console.log(fruits2);

// <------------18. use const for creating array-------->

// const fruits = ["apple", "mango", "grapes"];
// fruits = ["pineapple", "orange"] // Invalid ! so we should create an array by using const , it is safe way (if we use let , it's not safe because let can be change but const can't be change)
// fruits.push("banana");
// console.log(fruits);

/* <-------------------------19. While Loop in Array---------------------->*/

// const fruits = ["apple", "mango", "grapes"];
// let i = 0;
// while (i < fruits.length) {
//     console.log(fruits[i].toUpperCase())
//     i++;
// }
// let's store in another variable
// const fruits2 = [];
// while (i < fruits.length) {
//     fruits2.push(fruits[i].toUpperCase())
//     i++;
// }
// console.log(fruits2)

/* <-------------------------20. For Of Loop in Array---------------------->*/

// const fruits = ["apple", "mango", "grapes"];
// const fruits2 = [];

// for (let fruit of fruits) {
//     fruits2.push(fruit.toUpperCase(),);
// }
// console.log(fruits2)

/* <-------------------------21. For In Loop in Array---------------------->*/
// for in loop returns index of the array.
// const fruits = ["apple", "mango", "grapes"];
// const fruits2 = [];

// for (let index in fruits) {
//     fruits2.push(fruits[index].toUpperCase());
// }
// console.log(fruits2);

/* <-----------------------22. Array Destructuring------------------------>*/

// const myArray = ["value1", "value2", "value3", "value4", "value5"];
// let var1 = myArray[0];
// console.log(var1)
// let var2 = myArray[1];
// console.log(var2)

// let [myvar1, myvar2, ...myNewArray] = myArray; // here myNewArray will contain remaining values
// let myNewArray = myArray.slice(2);
// console.log(`value of myvar1 is : ${myvar1}`);
// console.log(`value of myvar2 is : ${myvar2}`);
// let [myvar3, myvar4, myvar5] = myNewArray;
// console.log(`value of myvar3 is : ${myvar3}`);
// console.log(`value of myvar4 is : ${myvar4}`);
// console.log(`value of myvar5 is : ${myvar5}`);

/* <--------------------------------------23. Objects----------------------------------->*/
// arrays are good but not sufficient for real world data that's why we use Objects
// Objects store key value pairs
// Objects don't have any index
// Objects is called object litterals also

// how to create objects

// const person = {
//     name: "Akash",
//     age: 22,
//     hobbies: ["Typing", "Listening music",]
// };
// person.gender = "Male";
// console.log(person)

// how to access data from objects
// console.log(person.name); //  This is dot notation   //or
// console.log(person["name"]); // This is bracket notation
// console.log(person.age);
// console.log(person.hobbies);

// how to add key vlue pair to objects

// <------------------24. Difference between dot and bracket notation in Object------------------->
// if we have a key with two words then we can't use [obj.word1 word2]. So we can use obj.['word1 word2']

// const person = {
//     name: "Akash",
//     age: 22,
//     hobbies: ["Typing", "Listening music",]
// };
// person["my hobbies"] = "Guitar"
// console.log(person["my hobbies"])
// person.email = "akky252@gmail.com" // or
// key = "alternative email"
// person[key] = "akashsaini0080@gmail.com"  // here we can add already defined key in []
// console.log(person)
// console.log(person[key]) //or
// console.log(person["alternative email"])

/* <--------------------------------------25. How to iterate Object----------------------------------->*/

// To iterate object we use two method
// 1. for in loop
// 2. object.keys

// const person = {
//     name: "Akash",
//     age: 22,
//     hobbies: ["Typing", "Listening music",]
// }
// // 1. for in loop

// for (let key in person) {
//     console.log(key)             // it will return all keys of an object.
// }

// for (let key in person) {
//     console.log(person[key])      // it will return all values of an object.
// }

// for (let key in person) {
//     console.log(`${key} : ${person[key]}`)  // it will return all key value pairs of an object.
// }

// 2. Object.keys

// console.log(Object.keys(person))
// console.log(typeof Object.keys(person))
// const value = Array.isArray((Object.keys(person)))
// console.log(value)    // object.keys gives us an array of all keys of the obj
// now we can use for of loop in this array

// for (let key of Object.keys(person)) {
//     console.log(person[key])
// }

/* <--------------------------------------26. computed properties in object----------------------------------->*/

// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1"
// const value2 = "myvalue2"

// const obj = {
//     [key1]: value1,
//     [key2]: value2
// }
// console.log(obj)
//or
// const obj2 = {}
// obj2[key1] = value1;
// obj2[key2] = value2;
// console.log(obj2);

/* <--------------------------------------27. Spread operator in object----------------------------------->*/

// const obj1 = {
//     key1: "value1",
//     key2: "value2",
//     key1: "valueAnother"
// };

// const obj2 = {
//     key3: "value3",
//     key4: "value4"
// };

// const newObj = { ...obj1, ...obj2, key5: "value5" };
// const newObj = { ...["item1", "item2"] };
// const newObj = { ..."abcdefghijklmnopqrstuvwxyz" }

// console.log(newObj)
// console.log(newObj[6])

/* <--------------------------------------28. object Destructuring----------------------------------->*/

// const band = {
//     bandName: "led zepplin",
//     famousSong: "stairway to heaven",
//     key3: "value3",
//     key4: "value4",
// };

// const { bandName, famousSong, ...restProps } = band;
// console.log(bandName);
// console.log(restProps);
// or
// const { bandName: var1, famousSong: var2 } = band;
// console.log(var2)

/* <--------------------------------------29. objects inside array----------------------------------->*/
// This is very useful in real world application

// const users = [
//     { userId: 1, firstName: 'Akash', gender: 'male' },
//     { userId: 2, firstName: 'Mohit', gender: 'male' },
//     { userId: 3, firstName: 'Akky', gender: 'male' },
// ]

// for (let user of users) {
//     console.log(user)           // or
// }

// for (let user of users) {
//     console.log(user.firstName)
// }

/* <--------------------------------------30. Nested Destructuring in Object----------------------------------->*/

// const users = [
//     { userId: 1, firstName: 'Akash', gender: 'male' },
//     { userId: 2, firstName: 'Mohit', gender: 'male' },
//     { userId: 3, firstName: 'Akky', gender: 'male' },
// ]

// const [{ firstName: user1firstName, userId }, , { gender: user3Gender }] = users;
// console.log(userId)
// console.log(user1firstName);
// console.log(user3Gender)
