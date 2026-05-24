let canvas;
let ctx;

let incrementor = 0;
let rectX;
let rectY;
let triangleX;
let triangleY;
let polyX;
let polyY;
let starX;
let starY;
let circleX;
let circleY;
let circleSpeedX = 3;
let circleSpeedY = 2;

let size = 100;

let bg = new Image();
bg.src = "Background.jpg";

window.onload = function () {
  canvas = document.getElementById("creativeCoding");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
  circleX = 50;
  circleY = 50;
  rectX = 0;
  rectY = 0;
  triangleX = 100;
  triangleY = canvas.height - size - 100;
  polyX = canvas.width - size;
  polyY = 0;
  starX = canvas.width - size;
  starY = canvas.height - size;
  setInterval(drawBoxxy, 10);
};

function drawBoxxy() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

  // bounce logic
  if (circleY > canvas.height - 50 || circleY < 50) {
    circleSpeedY = -circleSpeedY;
  }

  if (circleX > canvas.width - 50 || circleX < 50) {
    circleSpeedX = -circleSpeedX;
  }

  // move circle
  circleY += circleSpeedY;
  circleX += circleSpeedX;

  // vertical-moving circle
  ctx.fillStyle = "#FFE5B4";
  ctx.beginPath();
  ctx.arc(canvas.width / 2, circleY, 50, 0, Math.PI * 2);
  ctx.fill();

  // horizontal-moving circle
  ctx.fillStyle = "#FFE5B4";
  ctx.beginPath();
  ctx.arc(circleX, canvas.height / 2, 50, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.fillStyle = "blue";
  ctx.fillRect(rectX++, rectY++, 200, 200);
  
  ctx.fillStyle = "purple";
  ctx.beginPath();
  ctx.moveTo(triangleX, triangleY); // top point
  ctx.lineTo(triangleX - 100, triangleY + 200); // bottom left
  ctx.lineTo(triangleX + 100, triangleY + 200); // bottom right
  ctx.closePath();
  ctx.fill();
  triangleX++;
  triangleY--;
  
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.moveTo(polyX, polyY);
  ctx.lineTo(polyX - 100, polyY + 70);
  ctx.lineTo(polyX - 70, polyY + 200);
  ctx.lineTo(polyX + 70, polyY + 200);
  ctx.lineTo(polyX + 100, polyY + 70);
  ctx.closePath();
  ctx.fill();
  polyX--;
  polyY++;
  
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.moveTo(starX, starY - 100);
  ctx.lineTo(starX + 25, starY - 25);
  ctx.lineTo(starX + 100, starY - 25);
  ctx.lineTo(starX + 40, starY + 20);
  ctx.lineTo(starX + 60, starY + 100);
  ctx.lineTo(starX, starY + 50);
  ctx.lineTo(starX - 60, starY + 100);
  ctx.lineTo(starX - 40, starY + 20);
  ctx.lineTo(starX - 100, starY - 25);
  ctx.lineTo(starX - 25, starY - 25);
  ctx.closePath();
  ctx.fill();
  starX--;
  starY--;
}