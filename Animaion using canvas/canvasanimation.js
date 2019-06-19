let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");


let circle = function  (x, y, radius, fillCircle) {
   ctx.beginPath();
   ctx.arc(x, y, radius, 0, Math.PI * 2, false);

   if (fillCircle) {
      ctx.fill();
   } else {
      ctx.stroke();
   }
};

// drawing Bee
let drawBee = function (x, y) {
  ctx.lineWidth = 4;
  ctx.strokeStyle = "black";
  ctx.fillStyle = "gold";

  circle(x, y, 24, true);
  circle(x, y, 24, false);
  circle(x - 15, y - 33, 15, false);
  circle(x + 15, y - 33, 15, false);
  circle(x - 6, y - 3, 6, false);
  circle(x + 6, y - 3, 6, false);
};

// bee location
let update = function (coordinate) {
  let offset = Math.random() * 6 - 3;
  coordinate += offset;

  if (coordinate > 1000) {
     coordinate = 1000;
  } else if (coordinate < 0) {
     coordinate = 0;
  }

  return coordinate;
};

// animating the bee, starting position
let x = 500,
    y = 500;

setInterval(function () {
   ctx.clearRect(0, 0, 1000, 1000);

   drawBee(x, y);
   x = update(x);
   y = update(y);

   ctx.strokeRect(0, 0, 1000, 1000);
}, 30);