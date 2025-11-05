"use strict";

const canvas = document.querySelector(".canvas");
const divPixel = document.createElement("div");

const btnSetGrid = document.querySelector("[data-action='set-grid']");
const btnResetGrid = document.querySelector("[data-action='reset-grid']");
const btnClearCanvas = document.querySelector("[data-action='clear-canvas']");

divPixel.classList.add("canvas__pixel");

let gridNum = 16 ** 2;

for (let i = 0; i < gridNum; i++) {
  canvas.appendChild(divPixel.cloneNode());
}

let color = "gray";

canvas.addEventListener("mouseover", (e) => {
  e.target.style.background = color;
});
