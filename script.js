//  Cor do Pincel

// Initial data
let currentColor = "black";
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

let screen = document.querySelector("#tela");
let ctx = screen.getContext("2d");

// Events

document.querySelectorAll(".color").forEach((item) => {
  item.addEventListener("click", colorClickEvent);
});

screen.addEventListener("mousedown", mouseDownEvent); // Quando o usuário clicar na tela
screen.addEventListener("mousemove", mouseMoveEvent); // Quando o usuário mover o mause
screen.addEventListener("mouseup", mouseUpEvent); // Quando o usuário soltar o mause
document.querySelector(".clear").addEventListener("click", clearScreen);

// Functions

function colorClickEvent(e) {
  let color = e.target.getAttribute("data-color");

  currentColor = color;

  document.querySelector(".color.active").classList.remove("active");

  e.target.classList.add("active");
}

function mouseDownEvent(e) {
  canDraw = true;
  mouseX = e.pageX - screen.offsetLeft;
  mouseY = e.pageY - screen.offsetTop;
}
function mouseMoveEvent(e) {
  if (canDraw) {
    draw(e.pageX, e.pageY);
  }
}
function mouseUpEvent(e) {
  canDraw = false;
  mouseX = e.pageX - screen.offsetLeft;
  mouseY = e.pageY - screen.offsetTop;
}
function draw(x, y) {
  let pointX = x - screen.offsetLeft;
  let pointY = y - screen.offsetTop;

  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineJoin = "round";
  ctx.moveTo(mouseX, mouseY);
  ctx.lineTo(pointX, pointY);
  ctx.closePath();
  ctx.strokeStyle = currentColor;
  ctx.stroke();

  mouseX = pointX;
  mouseY = pointY;
}

function clearScreen() {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
/*
// PASSO A PASSO PARA DESENHAR NO CANVAS:
 -- QUANDO O CLICK DO MOUSE ABAIXAR , ATIVE O MODO DESENHO
 -- QUANDO O MAUSE SE MOVER, SE O MODO DESENHO ESTIVER ATIVADO, DESENHE.
 -- QUANDO O CLICK DO MOUSE  LEVANTAR, DESATIVER O MODO DESENHO   
*/
