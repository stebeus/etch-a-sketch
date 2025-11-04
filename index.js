"use strict";

const canvas = document.querySelector(".canvas");
const divPixel = document.createElement("div");
divPixel.classList.add("canvas__pixel");

for (let i = 0; i < 256; i++) {
  canvas.appendChild(divPixel.cloneNode());
}
