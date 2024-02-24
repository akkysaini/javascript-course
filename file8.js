// DOM (Document Object Model)
// console.log(document)  // here, HTML file store in the form of Object in the browser's window object , means Document is an object

/* 1. <----------------Select Element using getElementById----------------->*/
// we can select html's element through element's id with the help of getElementById

// console.log(document.getElementById("main-heading"));  // or
// console.dir(document.getElementById("main-heading"));   // so browsers return html's element in a object
// let's check type of main-heading
// console.log(typeof document.getElementById("main-heading")); // so this is an object

/* 2. <----------------Select Element using query selector----------------->*/
// query selector can select all type of html's elements just like CSS
// examples :-

// console.log(document.querySelector("#main-heading"));  // because this is id that's why using #
// console.log(document.querySelector(".header"));
// console.log(document.querySelector(".nav-item")); // so it will return only first element of nav-item class
// console.log(document.querySelectorAll(".nav-item")); // it will return node list with array like object

/* 3. <----------------Change text content of DOM----------------->*/

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.textContent);
// mainHeading.textContent = "Heading Changed"  // here we've changed main-heading element
// console.log(mainHeading.textContent);
// console.log(mainHeading.innerText);  // it will not show hide text

/* 4. <----------------Change the styles of elements----------------->*/

// const mainHeading = document.querySelector("#main-heading");
// // console.log(mainHeading.style);
// mainHeading.style.color = "orange";
// mainHeading.style.backgroundColor = "blue";  // javaScript don't accept '-' that's why we've used camelCase
// mainHeading.style.border = "2px solid red"

/* 5. <----------------Get and Set attributes----------------->*/

// 1.
// const link = document.querySelector("a");
// console.log(link.getAttribute("href").slice(1));
// const changeLink = link.setAttribute("href", "https://www.codewithharry.com");
// console.log(link.getAttribute("href"));

// const input = document.querySelector(".form-todo input");
// console.log(input.getAttribute("type"));

/* 6. <----------------Get multiple elements using get element by class name----------------->*/
// const navItems = document.getElementsByClassName("nav-item"); // it'll return HTML Collection that is array like object so we can use indexing and Lenth property in it.
// console.log(typeof navItems);
// console.log(navItems[1]);

/* 7. <----------------Get multiple elements using querySelectorAll----------------->*/
// const navItems = document.querySelectorAll(".nav-item");  // it'll return Node-List that is also array like object so we can use indexing and Lenth property in it.
// console.log(navItems[1]);

/* 8. <----------------Differece between HTML Collection and Node-List----------------->*/
// <.........Iterate Elements............>
// To iterate elements we've following loops method
// (i) For Loop
// (ii) For of Loop
// (iii) ForEach Loop  // we can't use this method to iterate through HTML Collection

// const navItems = document.getElementsByTagName("a");  // HTML Collection (Array like Object)
// console.log(navItems.length);
// (i) For Loop
// for (let i = 0; i < navItems.length; i++) {
//     const navItem = navItems[i];
//     navItem.style.color = "green";
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.fontWeight = "bold";
//     navItem.style.padding = "0.5rem 1rem";
// };

// (ii) For of Loop
// for (let navItem of navItems) {
//     navItem.style.color = "green";
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.fontWeight = "bold";
//     navItem.style.padding = "0.5rem 1rem";
// };

// (iii) ForEach Loop
// const navItems = document.querySelectorAll("a")
// navItems.forEach((navItem) => {
//     navItem.style.color = "green";
//     navItem.style.backgroundColor = "#fff";       // it's not working on HTML Collection That is why we're using using querySelector.
//     navItem.style.fontWeight = "bold";
//     navItem.style.padding = "0.5rem 1rem";
// })

// // So first we'll have to change navItems in Array then we can apply ForEach method. Let's see how we can change HTML Collection(array like object) to Array.
// let navItems = document.getElementsByTagName("a");  // HTML collection (array like object)
// navItems = Array.from(navItems);  // now this is an array ...let's check. This method also applicable on NodeList. After changing in Array we can use all the array methods like map, filter, reduce.
// // console.log(Array.isArray(navItems));
// navItems.forEach((navItem) => {
//     navItem.style.color = "green";
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.fontWeight = "bold";
//     navItem.style.padding = "0.5rem 1rem";
// })

/* 9. <----------------Inner HTML----------------->*/
// const headline = document.querySelector(".headline");
// // console.log(headline.innerHTML);
// headline.innerHTML = "<h1>Inner HTML changed</h1>";
// headline.innerHTML += "<button class='btn btn-headline'>Learn More</button>"
// console.log(headline);

/* 10. <----------------------DOM Traversing----------------------->*/

// const rootNode = document.getRootNode();  // document object is the root node.
// // console.log(rootNode);

// // let's see child nodes of document
// // console.log(rootNode.childNodes);  // because it's an array like object. so we use indexing in it

// // ChildNodes of html
// const htmlElementNode = rootNode.childNodes[1];
// // console.log(htmlElementNode.childNodes);            // output: NodeList(3) [head, text, body]

// // let's see head of html (parent node)
// const headElementNode = htmlElementNode.childNodes[0];
// // console.log(headElementNode);

// // ChildNodes of head
// const childNodesOfHead = headElementNode.childNodes;
// console.log(childNodesOfHead);

// // let's see body of html (parent node)
// const bodyElementNode = htmlElementNode.childNodes[2];
// // console.log(bodyElementNode);

// // ChildNodes of body
// const childNodesOfBody = bodyElementNode.childNodes;
// // console.log(childNodesOfBody);

// // let's see parentNode of body
// const parentNodeOfBody = bodyElementNode.parentElement;
// // console.log(parentNodeOfBody);

// // let's see Siblings Relationship
// const siblingsOfHtml = headElementNode.nextSibling;
// // console.log(siblingsOfHtml);

// // If I wanna ignore text
// const nextElementOfHead = headElementNode.nextElementSibling
// // console.log(nextElementOfHead);
// const head = document.querySelector("head");
// console.log(head);
// console.log(head.children);

// <-----------Let's change style using DOM Traversing----------->

// const h2 = document.querySelector("h2");
// const div = h2.parentElement;
// console.log(div);
// div.style.background = "cyan";
// div.style.color = "black";
// div.style.border = "2px solid red";

/* 11. <--------------------ClassList, Add, Remove and Toggle classes------------------------->*/

// const todoSection = document.querySelector(".todo-section");
// console.log(todoSection);

// let's add classList in it
// todoSection.classList.add("bg-dark");

// Let's remove container class
// todoSection.classList.remove("container");

// let's check does container class exist in todo-section ?
// const ans = todoSection.classList.contains("container");
// console.log(ans);        // output: true
// const ans2 = todoSection.classList.contains("bg-dark");
// console.log(ans2)

// Toggle :  If any tag's class list contains any class value then toggle will remove that and class value not exists then toggle will add that.
// todoSection.classList.toggle("bg-dark");         // here bg-dark class has added
// todoSection.classList.toggle("bg-dark");        // here bg-dark class has removed

// const header = document.querySelector(".header");         // header contains only one class
// console.log(header.classList);                // let's add another class
// header.classList.toggle("bg-dark");

/* 12. <--------------------Add HTML Element using JavaScipt------------------------->*/
// note:- this way is not recommended Because it creates performance issues. If I wanna change whole html code then we can use it

// const todoList = document.querySelector(".todo-list");
// todoList.innerHTML = "<li>I've to study at 9 'O' clock.</li>"    // here javascipt change inner html

// let's add new element without changing existing elements
// todoList.innerHTML = todoList.innerHTML + "<li>I've to study at 9 'O' clock.</li>";
// or
// todoList.innerHTML += "<li>I've to study at 9 pm.</li>";
// todoList.innerHTML += "<li>Study for JavaScipt at night.</li>";

/* 13. <--------------------CreateElement, Append, Prepend, Remove, Before and After------------------------->*/
// Note:- These are recommended methods to add or remove html elements

// const todoList = document.querySelector(".todo-list");
// const newTodoItem = document.createElement("li");

// // const newTodoItemText = document.createTextNode("Study for JavaScipt at night");
// // newTodoItem.append(newTodoItemText);
// // or

// newTodoItem.textContent = "Study for JavaScipt at night.";
// todoList.append(newTodoItem);        // append add after
// todoList.prepend(newTodoItem);        // append add before

// Remove : let's remove todo1
// const todo1 = document.querySelector(".todo-list li")  // it'll return first li of ul element
// todo1.remove();

// before, after
// const todoList = document.querySelector(".todo-list");
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Study for JavaScipt at night.";
// // todoList.before(newTodoItem);
// todoList.after(newTodoItem);

/* 14. <----------------------------------Clone Nodes------------------------------------------>*/
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "Study for JavaScipt at night.";
// ul.append(li);
// // ul.prepend(li);           // here either it can add before or after. so we can clone element If we wanna add both side
// const li2 = li.cloneNode(true);
// ul.prepend(li2);

/* 15. <------------------------------Static list vs Live list-------------------------------->*/
// querySelectorAll returns Static List and getElementBySomething returns Live List

// const ul = document.querySelector(".todo-list");
// const listItems = document.querySelectorAll("todo-list li");
// const sixthLi = document.createElement("li");
// sixthLi.textContent = "item 6";
// ul.append(sixthLi);

/* 16. <----------------------------------How to get the dimensions of an element------------------------------------>*/
// height width
// const todoSection = document.querySelector(".todo-section");
// const info = todoSection.getBoundingClientRect();
// const infoWidth = todoSection.getBoundingClientRect().width;
// const infoHeight = todoSection.getBoundingClientRect().height;
// console.log(info);
// console.log(infoWidth);
// console.log(infoHeight);

/* 17. <----------------------------------Introduction to Events------------------------------------>*/
// There are three types to add Events

// (i) In HTML File : example ----> ONCLICK, ONHOVER , ONSCROLL

// (ii) In JavaScript file by selecting DOM.

// const btn = document.querySelector(".btn-headline");
// btn.onclick = function () {                                        // It's not good way
//     console.log("You clicked me !!!");
// }

// (iii) AddEventListener Method

// const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click", () => console.log("You clicked me !!!!"));

// <-----------This Keyword inside addEventListener callback--------------->

// const btn = document.querySelector(".btn-headline");

// btn.addEventListener("click", function () {
//     console.log("You clicked me !!!!");
//     console.log("value of this");                    // In fuction declaration this's value will be button itself But in arrow function this's value will be window
//     console.log(this);
// });

// <-------------------Click event on multiple elements----------------------->

// When we add AddEventListener on any html element , JavaScript Engine execute the code line by line
// When browser get that users perform any event then browser do two works.  I. give that callback function to js engine. II. Along with that callback function browser give that event's information also (in the form of Object);

// To add event on multiple elements , we can use loops like for , for of , for each

// const allTodos = document.querySelectorAll(".todo-list li");
// for (let todo of allTodos) {
//     todo.addEventListener("click", function (event) {
//         console.log("You clicked : ", this.textContent);
//         console.log(event);
//     })
// };
// or In the case of arrow function we can get same output by using target or currentTarget
// for (let todo of allTodos) {
//     todo.addEventListener("click", (e) => {
//         console.log("You clicked :", e.currentTarget.textContent);
//     })
// };

// Let's change color with this method

// const allTodos = document.querySelectorAll(".todo-list li");
// for (let todo of allTodos) {
//     todo.addEventListener("click", (e) => {
//         e.target.style.background = "black";
//         e.target.style.color = "white";
//         console.log(e);
//     })
// };

/* 18. <----------------------------------Keypress and Mouseover Events------------------------------------>*/

// Keypress event
// const body = document.body;
// body.addEventListener("keypress", (e) => {
//     console.log(e.key);
// })

// MouseOver event
// const mainButton = document.querySelector(".btn-headline");
// mainButton.addEventListener("mouseover", () => {
//     console.log("mouseover event ocurred !!")
// });
// mainButton.addEventListener("mouseleave", () => {
//     console.log("mouseleave event ocurred !!")
// });

/* 19. <----------------------------------Event Bubbling (event propogation), Event Capturing & Event Delegation------------------------------------>*/
// There is saparate files for this in evt_cap_bubl_delgn folder.









































