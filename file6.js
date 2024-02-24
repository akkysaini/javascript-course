/*<------------------------------------Map Object------------------------------------->*/
// map is an iterable
// store data in ordered fashion
// store key value pair just like object
// duplicate keys are not allowed like objects
// <------difference between Maps and objects--------->
// objects can only have string or symbol as key
// in Maps you can use anything as key like array, number, string

// examples:-
// 1.
// const person = new Map();
// person.set("firstName", "Akash");
// person.set("age", 22);
// person.set(1, 'one');     // here 1 will be number as key not string
// person.set([1, 2, 3], "OneTwoThree")
// or
// const person = new Map([["firstName","Akash"],["age",22],[[1,2,3],"OneTwoThree"]]);
// console.log(person);

// 2.
// Now let's get all keys from person
// console.log(person.keys());  // it will return keys in an object

// 3.
// Now let's get separate value from keys of person
// console.log(person["firstName"]); // We can't get values like an object so it's not valid
// console.log(person.get("firstName"));   // it's valid
// console.log(person.get(1));  // because map is iterater so we can use for of loop on it to iterate keys
// for (let key of person.keys()) {
//     console.log(key, typeof key);
// }

// 4.
// we can get key value pairs also with using for of loop
// for (let [key, value] of person) {
//     // console.log(typeof key);               // it will return key value pairs in array , so we can destructure that array
//     // console.log(Array.isArray([key, value]))
//     // console.log(key, value)
// }

// 5.
// Let's see realistic example of Map object
// const person1 = {
//     id: 1,
//     firstName: "Akash",
// };
// const person2 = {
//     id: 2,
//     firstName: "Alia Bhatt"
// };
// now let's assign these object as key in any Map
// const extraInfo = new Map();
// extraInfo.set(person1, { age: 8, gender: "male" });
// extraInfo.set(person2, { age: 9, gender: "female" });
// console.log(extraInfo);

// console.log(person1.id);
// console.log(extraInfo.get(person1).gender);
// console.log(extraInfo.get(person2).gender);


/*<-----------------------Clone objects using Object.assign--------------------->*/

// const obj1 = {
//     key1: "value1",
//     key2: "vlaue2"
// };
// const obj2 = obj1;  // In this case if we change obj1 then obj2 will automatically change so instead of we can use spread operator or Object.assign
// const obj2 = { ...obj1 };  // or
// const obj2 = Object.assign({}, obj1)
// obj1.key3 = "vlaue3";
// console.log(obj1);
// console.log(obj2);


/*<------------------------------------Optional Chaining------------------------------------->*/

// const user = {
//     firstName: "Akash",
//     // address: { houseNumber: '1234' }
// }
// console.log(user?.firstName);
// console.log(user?.address?.houseNumber);   // here '?' will check that "is user.address exist" if it will not exist then '?' will return undefined


/*<------------------------------------Methods------------------------------------->*/
// personInfo = function () {
//     console.log(`person name is ${this.firstName} and person age is ${this.age}`)
// }
// const person1 = {
//     firstName: "Akash",
//     age: 22,
//     // about: function () {
//     //     console.log(`person name is ${this.firstName} and person age is ${this.age}`)
//     // }
//     about: personInfo
// }
// const person2 = {
//     firstName: "Mohit",
//     age: 23,
//     about: personInfo
// }
// const person3 = {
//     firstName: "Abhay",
//     age: 34,
//     about: personInfo
// }
// const person4 = {
//     firstName: "Mohan",
//     age: 20,
//     about: personInfo
// }

// person3.about();


/*<------------------------------------Call, Apply, Bind------------------------------------->*/

// console.log(this); // or
// console.log(window);

// function about(hobby, favSinger) {
//     console.log(this.firstName, this.age, hobby, favSinger)
// }

// const user1 = {
//     firstName: "Akash",
//     age: 22,

// }
// const user2 = {
//     firstName: "Mohit",   // Now I wanna use about method in user2
//     age: 23,
// }
// // call and apply
// about.call(user1, "guitar", "Arijit Singh"); // or here we can use apply also instead of call
// about.apply(user1, ['guitar', 'Arijit singh'])

// // bind :  bind returns a function
// const myFunc = about.bind(user1, "guitar", "Arijit Singh");
// myFunc();

// Small Warning : Don't do this mistake
// const user3 = {
//     firstName: "Akash",
//     age: 23,
//     about: function () {
//         console.log(this.firstName, this.age);
//     }
// }
// user3.about();  // or Let's store this function in a variable

// const myFunc = user3.about.bind(user3);
// myFunc();

// <---Arrow function behaviour-------->
// const user3 = {
//     firstName: "Akash",
//     age: 23,
//     about: () => {
//         console.log(this.firstName, this.age);     // arrow function take this's value from its surroundings means here this's value will be window object , So here about will return undefined
//         // In case of arrow function we can't change this's value also
//     }
// }

// user3.about();
// user3.about.call(user3);


/*<------------------------------------__proto__, Prototype------------------------------------->*/
// V.Imp for interview

// I want multiple user's data so I create a function
// that fucntion will add key value pair and then return an object

// function creatUser(firstName, lastName, email, age, address) {
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function () {
//         return `${this.firstName} is ${this.age} years old`
//     }
//     user.is18 = function () {
//         return this.age >= 18;
//     }
//     return user;
// };

// // 1.
// const user1 = creatUser('Akash', 'Saini', 'akashsaini@gmail.com', 22, 'my address')
// // console.log(user1);
// const about1 = user1.about();
// console.log(about1);
// const is181 = user1.is18();
// console.log(is181);

// // 2.
// const user2 = creatUser('Mohit', 'Saini', 'mohitsaini@gmail.com', 25, 'my address')
// // console.log(user2)
// const about2 = user2.about();
// console.log(about2);
// const is182 = user2.is18();
// console.log(is182);


// Let's do it simple : because we can't create  Methods  again n again and it will take more space also

// const userMethods = {
//     about: function () {
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18: function () {
//         return this.age >= 18;
//     }
// }

// function creatUser(firstName, lastName, email, age, address) {
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     return user;
// };

// const user1 = creatUser('Akash', 'Saini', 'akashsaini@gmail.com', 22, 'my address')
// const user2 = creatUser('Mohit', 'Saini', 'mohitsaini@gmail.com', 25, 'my address')
// const user3 = creatUser('Rajat', 'Saini', 'rajatsaini@gmail.com', 20, 'my address')

// const about1 = user1.about();
// console.log(about1);
// const about2 = user2.about();
// console.log(about2);

// <------Solution using Object.create------------->
// let's talk about (__proto__) or [[prototype]]

// const userMethods = {
//     about: function () {
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18: function () {
//         return this.age >= 18;
//     }
// }

// function creatUser(firstName, lastName, email, age, address) {
//     const user = Object.create(userMethods);         // this line create empty object and set proto as userMethods so we don't need to add userMethods in creatUser. so we san say that we've set userMethod as __proto__ or [[protetype]] of creatuser function.
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// };

// const user1 = creatUser('Akash', 'Saini', 'akashsaini@gmail.com', 22, 'my address')
// const user2 = creatUser('Mohit', 'Saini', 'mohitsaini@gmail.com', 25, 'my address')
// const user3 = creatUser('Rajat', 'Saini', 'rajatsaini@gmail.com', 20, 'my address')

// const about1 = user1.about();
// console.log(about1);
// const is18 = user2.is18();
// console.log(is18);

/*<------------------------------------What is Prototype------------------------------------->*/
// Prototype is an Object and Only functions provide prototype property. Yes functions provide us an empty Objects as prototype.
// javaScript function ===> function + Object.
// We can treat functions as a Object also.

// function hello() {
//     console.log("Hello World");
// }
// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
// hello.prototype.sing = () => {
//     console.log("lalallaalal");
// }
// console.log(hello.prototype);

// 2. realistic example

// function creatUser(firstName, lastName, email, age, address) {
//     const user = Object.create(creatUser.prototype);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// };
// // console.log(creatUser.prototype);
// // let's add function in creatUser's prototype

// creatUser.prototype.about = function () {
//     return `${this.firstName} is ${this.age} years old`
// };
// creatUser.prototype.is18 = function () {
//     return this.age >= 18;
// }

// const user1 = creatUser('Akash', 'Saini', 'akashsaini@gmail.com', 22, 'my address')
// const user2 = creatUser('Mohit', 'Saini', 'mohitsaini@gmail.com', 25, 'my address')
// const user3 = creatUser('Rajat', 'Saini', 'rajatsaini@gmail.com', 20, 'my address')

// console.log(user1.about());
// console.log(user2.about());
// console.log(user3.is18());

/*<------------------------------------New Keyword------------------------------------->*/
// New keyword do three works
// 1.) create empty object as this = {}
// 2.) return this {}
// 3.) set __proto__ equal to prototype

// function CreatUser(firstName, lastName, email, age, address) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// };

// CreatUser.prototype.about = function () {
//     return `${this.firstName} is ${this.age} years old`
// };
// CreatUser.prototype.is18 = function () {
//     return this.age >= 18;
// }

// const user1 = new CreatUser('Akash', 'Saini', 'akashsaini@gmail.com', 22, 'my address')
// const user2 = new CreatUser('Mohit', 'Saini', 'mohitsaini@gmail.com', 25, 'my address')
// const user3 = new CreatUser('Rajat', 'Saini', 'rajatsaini@gmail.com', 20, 'my address')

// console.log(user1.about());
// console.log(user2.about());
// console.log(user3.is18());

/*<------------------------------------hasOwnProperty------------------------------------->*/

// function CreatUser(firstName, lastName, email, age, address) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// };

// CreatUser.prototype.about = function () {
//     return `${this.firstName} is ${this.age} years old`
// };
// CreatUser.prototype.is18 = function () {
//     return this.age >= 18;
// }

// const user1 = new CreatUser('Akash', 'Saini', 'akashsaini@gmail.com', 22, 'my address')
// const user2 = new CreatUser('Mohit', 'Saini', 'mohitsaini@gmail.com', 25, 'my address')
// const user3 = new CreatUser('Rajat', 'Saini', 'rajatsaini@gmail.com', 20, 'my address')

// // If I want to see user1's(Object) Keys
// for (let key in user1) {
//     if (user1.hasOwnProperty(key)) {    // If I use hasOwnProperty then for will return only user1 keys else it will reuturn prototype's keys also
//         console.log(key)
//     }
// };

/*<------------------------------------Class Keyword------------------------------------->*/

// class CreatUser {
//     constructor(firstName, lastName, email, age, address) {
//         console.log("constructor called")
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.age = age;
//         this.address = address;
//     }
//     about() {
//         return `${this.firstName} is ${this.age} years old`;
//     }
//     is18() {
//         return this.age >= 18;
//     }
// }

// // we must invoke constructor with using new keyword otherwise it will not work. example:
// const user1 = new CreatUser('Akash', 'Saini', 'akashsaini@gmail.com', 22, 'my address')
// const user2 = new CreatUser('Mohit', 'Saini', 'mohitsaini@gmail.com', 25, 'my address')
// const user3 = new CreatUser('Rajat', 'Saini', 'rajatsaini@gmail.com', 20, 'my address')

// console.log(user1.about());
// console.log(user2.email);
// console.log(Object.getPrototypeOf(user3));


/*<------------------------------------Class practice and extends keyword------------------------------------->*/

// 1.
// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         return `${this.name} is eating`;
//     }
//     isSuperCute() {
//         return this.age <= 1;
//     }
//     isCute() {
//         return `Yes ${this.name} is Cute.`
//     }
// }

// const animal1 = new Animal("kitty", 1);
// console.log(animal1.isCute());
// console.log(animal1.eat());

// 2.
// class Dog extends Animal { }        // here Dog is sub-class of his parent class(Animal)

// const Tommy = new Dog("Tommy", 2);

// console.log(Tommy);
// console.log(Tommy.isCute());
// console.log(Tommy.isSuperCute());

// or
/*<------------------------------------Super Keyword------------------------------------->*/
// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         return `${this.name} is eating`;
//     }
//     isSuperCute() {
//         return this.age <= 1;
//     }
//     isCute() {
//         return `Yes ${this.name} is Cute.`
//     }
// }
// //
// class Dog extends Animal {
//     constructor(name, age, speed) {
//         super(name, age);
//         this.speed = speed;
//     }
//     run() {
//         return `${this.name} is running at ${this.speed} km/h`
//     }
//     eat() {
//         return `Modified Eat : ${this.name} is eating`;     // same method in subclass.
//     }
// }
// const Tommy = new Dog("Tommy", 2, 45);

// console.log(Tommy);
// console.log(Tommy.run());
// console.log(Tommy.eat());


/*<------------------------------------Getters and Setters------------------------------------->*/

// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get fullName() {                  // here get will set fullName(function) as a property
//         return `${this.firstName} ${this.lastName}`
//     }
//     set fullName(fullName) {
//         const [firstName, lastName] = fullName.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// const person1 = new Person("Akash", "Saini", 22);

// // console.log(person1.fullName());   // here we've to add paranthesis with fullName as a function without using set.

// // console.log(person1.fullName);
// person1.fullName = "Mohit Kumar";
// console.log(person1.firstName);


/*<------------------------------------Static methods and Properties------------------------------------->*/

// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get fullName() {                  // here get will set fullName(function) as a property
//         return `${this.firstName} ${this.lastName}`
//     }
//     set fullName(fullName) {
//         const [firstName, lastName] = fullName.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     eat() {
//         return `${this.firstName} is eating`;
//     }
//     isSuperCute() {
//         return this.age <= 1;
//     }
//     isCute() {
//         return `Yes ${this.firstName} is Cute.`
//     }
//     static classInfo() {
//         return `this is person class.`
//     }
//     static prop = "static property";
// }

// // const person1 = new Person("Akash", "Saini", 22);
// // console.log(person1.eat());

// console.log(Person.classInfo());     // here static functions can invoke only with parent class not with object
// console.log(Person.prop);

















