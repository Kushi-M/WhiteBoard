const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.6;

// Variables
let drawing = false;
let erasing = false;

// Start Drawing
canvas.addEventListener("mousedown", () => (drawing = true));
canvas.addEventListener("mouseup", () => (drawing = false));
canvas.addEventListener("mousemove", draw);

function draw(event) {
  if (!drawing) return;
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.strokeStyle = erasing ? "#ffffff" : "#000000";
  ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}

// Switch Modes
document.getElementById("drawMode").addEventListener("click", () => (erasing = false));
document.getElementById("eraseMode").addEventListener("click", () => (erasing = true));

// Clear Canvas
document.getElementById("clearCanvas").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Save Canvas as Image
document.getElementById("saveImage").addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "whiteboard.png";
  link.href = canvas.toDataURL();
  link.click();
});