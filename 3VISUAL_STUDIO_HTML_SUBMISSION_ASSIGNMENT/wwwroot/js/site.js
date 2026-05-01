// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const box = document.getElementById("animation-box");
let position = -400;

function animateBox() {
    position += 2;
    box.style.left = position + "px";

    if (position >= 400) {
        position = -400;
    }

    requestAnimationFrame(animateBox);
}

animateBox() ;