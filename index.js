"use strict";

const container = document.querySelector(".container");
const divPixel = document.createElement("div");
divPixel.classList.add("container__div-pixel");

for (let i = 0; i < 16; i++) {
  container.appendChild(divPixel.cloneNode());
}
