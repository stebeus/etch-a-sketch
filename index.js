"use strict";

const canvas = document.querySelector(".canvas");
const divPixel = document.createElement("div");

const btnSetGrid = document.querySelector("[data-action='set-grid']");
const btnResetGrid = document.querySelector("[data-action='reset-grid']");
const btnClearCanvas = document.querySelector("[data-action='clear-canvas']");

divPixel.classList.add("canvas__pixel");

function setCanvasGrid(gridNum = 16) {
  const gridFactor = gridNum ** 2;

  for (let i = 0; i < gridFactor; i++) {
    canvas.appendChild(divPixel.cloneNode());
  }
}

setCanvasGrid();

let color = "gray";

function colorDivPixel(e) {
  e.target.style.background = color;
}

canvas.addEventListener("mouseover", colorDivPixel);
