// set canvas id to variable
var canvas = document.getElementById("draw");

// get canvas 2D context and set it to the correct size
var ctx = canvas.getContext("2d");
resize();

// resize canvas when window is resized
function resize() {
  ctx.canvas.width = window.innerWidth - 150;
  ctx.canvas.height = window.innerHeight;
}

// add event listeners to specify when functions should be triggered
window.addEventListener("resize", resize);
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);

// last known position
var pos = {
  x: 0,
  y: 0
};

// new position from mouse events
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

function brushColor(color) {
  col = color
}

function draw(e) {
  if (e.buttons !== 1) return; // if mouse is pressed.....

  // var color = document.getElementById("hex").value;
  var color = col;
  var width = document.getElementById("width").value;
showTheSize();
  ctx.beginPath(); // begin the drawing path

  ctx.lineWidth = width; // width of line
  ctx.lineCap = "round"; // rounded end cap
  ctx.strokeStyle = "#" + color; // hex color of line

  ctx.moveTo(pos.x, pos.y); // from position
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to position

  ctx.stroke(); // draw it!
}
// save canvas image as data url (png format by default)
var dataURL = canvas.toDataURL();

// set canvasImg image src to dataURL
// so it can be saved as an image
document.getElementById('canvasImg').src = dataURL;

function prepareImg() {
  var canvas = document.getElementById('canv');
  document.getElementById('inp_img').value = canvas.toDataURL();
}

function showTheSize() {
    var width = document.getElementById("width").value;
  document.getElementById("showSize").innerHTML = width + "px";
}

showTheSize();
