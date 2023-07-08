function product(anything) {
    document.querySelector(".product").src = anything;
}

function changeColor(color) {
    const circle = document.querySelector(".circle");
    const btn = document.querySelector(".btn");
    const hl = document.querySelector(".hl");

    circle.style.background = color;
}