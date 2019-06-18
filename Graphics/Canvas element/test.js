// drawing on canvas
/*
let canvas = document.querySelector("#canvas");

let ctx = canvas.getContext("2d");*/
/*
ctx.fillStyle = "red";

let firstSqr = ctx.fillRect(100, 0,50, 50);
ctx.fillStyle = "yellow";
let secondSqr = ctx.fillRect(120, 50, 10, 20);
let thirdSqr = ctx.fillRect(85, 70, 80, 80);
ctx.fillStyle = "green";
let fourthSqr = ctx.fillRect(50, 70, 35, 10);
let fifthSqr = ctx.fillRect(165, 70, 35, 10);
let sixthSqr = ctx.fillRect(85, 150, 10, 55);
let seventhSqr = ctx.fillRect(155, 150, 10, 55);

ctx.fillStyle = "yellow";
let one = ctx.fillRect(0, 200,100, 150);
ctx.fillStyle = "green";
let two = ctx.fillRect(100, 200,100, 150);
ctx.fillStyle = "blue";
let three = ctx.fillRect(200, 200,100, 150);
*/
//=================================================================================

// drawing rectangle outlines
// ctx.strokeStyle = "deeppink";
// ctx.lineWidth = 4;
// ctx.strokeRect(10,10,100,20)
//=================================================================================

// drawing lines or paths
/*
ctx.strokeStyle = "turquoise";
ctx.lineWidth = 4;
ctx.beginPath();
ctx.moveTo(10,10);
ctx.lineTo(60,60);
ctx.moveTo(60,10);
ctx.lineTo(10,60);
ctx.stroke();

//========================
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.beginPath();
// head
ctx.moveTo(10,10);
ctx.lineTo(30,10);
ctx.lineTo(30,30);
ctx.lineTo(10,30);
ctx.lineTo(10,10);
// neck
ctx.moveTo(20,30);
ctx.lineTo(20, 50);
//body
ctx.moveTo(20,50);
ctx.lineTo(20,70);
// arms
ctx.moveTo(20,50);
ctx.lineTo(40,40);
ctx.moveTo(20,50);
ctx.lineTo(0,40);
// legs
ctx.moveTo(20,70);
ctx.lineTo(40,100);
ctx.moveTo(20,70);
ctx.lineTo(0,100);

ctx.stroke();
*/
//=================================================================================

//drawing arcs and circles
/*
ctx.lineWidth = 4;
ctx.strokeStyle = "green";


ctx.beginPath();
ctx.arc(50, 50, 20, 0,  Math.PI / 2, false);
ctx.stroke();

ctx.beginPath();
ctx.arc(100, 50, 20, 0, Math.PI, false);
ctx.stroke();

ctx.beginPath();
ctx.arc(150, 50, 20, 0, Math.PI * 2, false);
ctx.stroke();
*/

//=================================================================================
//drawing multiple circles with the function
/*
let circle = function(x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);

  if (fillCircle) {
     ctx.fillStyle = ctx.strokeStyle;
     ctx.fill();
  } else {
     ctx.stroke();
  }
};

let drawSnowman = function(x, y) {
   ctx.lineWidth = 4;
   ctx.strokeStyle = "black";
   circle(x + 200, y + 200, 50, false);

   ctx.lineWidth = 4;
   ctx.strokeStyle = "black";
   circle(x + 200, y + 320, 70, false);

   ctx.lineWidth = 4;
   ctx.strokeStyle = "black";
   circle(x + 180, y + 190, 5, true);

   ctx.lineWidth = 4;
   ctx.strokeStyle = "black";
   circle(x + 220, y + 190, 5, true);

   ctx.lineWidth = 4;
   ctx.strokeStyle = "red";
   circle(x + 200, y + 205, 5, true);

   ctx.lineWidth = 4;
   ctx.strokeStyle = "black";
   circle(x + 200, y + 290, 5, true);

   ctx.lineWidth = 4;
   ctx.strokeStyle = "black";
   circle(x + 200, y + 320, 5, true);

   ctx.lineWidth = 4;
   ctx.strokeStyle = "black";
   circle(x + 200, y + 350, 5, true);
};

drawSnowman(300, 500);
*/

/*
let points = [[50, 50], [50, 100], [100, 100], [100, 50], [50,50]];
let mysteryPoints = [[300, 300], [100, 200], [50, 240], [200, 100], [140, 180], [200, 180], [140, 240]];
let qqPoints = [[150, 150], [150, 600], [75, 360], [300, 150], [450, 270], [570, 900], [210, 360]];

let drawPoints = function (points) {
   ctx.lineWidth = 5;
   ctx.strokeStyle = "red";
   ctx.beginPath();
   ctx.moveTo(points[0][0], points[0][1]);
   for (let i = 0; i < points.length; i++) {
      ctx.lineTo(points[i][0], points[i][1]);
   }
   ctx.stroke();
};
drawPoints(points);
drawPoints(mysteryPoints);
drawPoints(qqPoints);
*/
//=================================================================================

// drawing by mouse

let circle = function(x, y, radius) {
   ctx.beginPath();
   ctx.arc(x, y, radius, 0, Math.PI * 2, false);
   ctx.fillStyle = "red";
   ctx.fill();
};

$("canvas").mousemove(function (event) {
   circle(event.pageX, event.pageY, 3)
});
