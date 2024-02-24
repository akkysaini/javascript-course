/* 19. <----------------------------------Event Bubbling (event propogation), Event Capturing & Event Delegation------------------------------------>*/

// What is capturing and bubbling?
// Event capturing means propagation of event is done from ancestor elements to child element in the DOM while event bubbling means propagation is done from child element to ancestor elements in the DOM. The event capturing occurs followed by event bubbling.

// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// Event Capturing : It is the opposite of Bubbling

// document.body.addEventListener("click", () => {
//     console.log("Captured Body !!");
// }, true)

// grandparent.addEventListener("click", () => {
//     console.log("Captured grandparent !!");
// }, true)

// parent.addEventListener("click", () => {
//     console.log("Captured parent !!");
// }, true)

// child.addEventListener("click", () => {
//     console.log("Captured child !!");
// }, true)



// Event Bubbling/event propogation : If you click any event then it will call and (If that event's parent contains any event then parent will call also)

// document.body.addEventListener("click", () => {
//     console.log("Bubble Body !!");
// })

// grandparent.addEventListener("click", () => {
//     console.log("Bubble grandparent !!");
// })

// parent.addEventListener("click", () => {
//     console.log("Bubble parent !!");
// })

// child.addEventListener("click", () => {
//     console.log("Bubble child !!");
// })


// Event Delegation : Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the . target property of the event object.

// grandparent.addEventListener("click", (e) => {
//     console.log(e.target);
//     // console.log("Bubble Something !!");
// })














