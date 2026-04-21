const box = document.getElementById("animation-box");
let position = 0;

function animateBox() {
    position += 2;
    box.style.left = position + "px";

    if (position < 200) {
        requestAnimationFrame(animateBox);
    }
}

animateBox();