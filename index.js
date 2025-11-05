"use strict";

const canvas = document.querySelector(".canvas");
const divPixel = document.createElement("div");

const btnSetGrid = document.querySelector("[data-action='set-grid']");
const btnResetGrid = document.querySelector("[data-action='reset-grid']");

divPixel.classList.add("canvas__pixel");

function setCanvasGrid(gridNum = 16) {
  let divSquareSize = 640 / gridNum;

  divPixel.style.width = `${divSquareSize}px`;
  divPixel.style.height = `${divSquareSize}px`;

  const gridFactor = gridNum ** 2;

  for (let i = 0; i < gridFactor; i++) {
    canvas.appendChild(divPixel.cloneNode());
  }
}

setCanvasGrid();

function setNewCanvasGrid() {
  let gridNewNum = prompt("Insert new grid number (1–32)");

  if (gridNewNum > 32) {
    alert("The inserted number is too big. Input another value");
  } else if (gridNewNum < 1) {
    alert("The inserted number is smaller than 1. Input another value");
  } else {
    canvas.innerHTML = "";
    setCanvasGrid(gridNewNum);
  }
}

function resetCanvasGrid() {
  canvas.innerHTML = "";
  setCanvasGrid();
}

let color = "gray";

function colorDivPixel(e) {
  e.target.style.background = color;
}

canvas.addEventListener("mouseover", colorDivPixel);

btnSetGrid.addEventListener("click", setNewCanvasGrid);
btnResetGrid.addEventListener("click", resetCanvasGrid);
