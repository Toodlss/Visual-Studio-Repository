let box = document.getElementById("box");
let x = 0;

setInterval(() => {
    x += 5;
    box.style.left = x + "px";

    if (x > 1800) x = 0;
}, 30);