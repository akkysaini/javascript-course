const body = document.body;
const button = document.querySelector("button");

const id = setInterval(() => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    body.style.background = `rgb(${red},${green},${blue})`;
}, 1000);

button.addEventListener("click", () => {
    clearInterval(id);
    button.textContent = body.style.background;
});
