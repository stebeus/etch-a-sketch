"use strict";

const canvas = document.querySelector(".canvas");
const divPixel = document.createElement("div");
divPixel.classList.add("canvas__pixel");

let gridNum = 16 ** 2;

for (let i = 0; i < gridNum; i++) {
  canvas.appendChild(divPixel.cloneNode());
}

canvas.addEventListener("mouseover", (e) => {
  e.target.style.background = "blue";
});
