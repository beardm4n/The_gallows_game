let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

let width = canvas.width,
    height = canvas.height;

// ball constructor
let Ball = function () {
  this.x = Math.random() * width;
  this.y = Math.random() * height;
  this.xSpeed = -(Math.random() * 20 - 10);
  this.ySpeed = Math.random() * 20 - 10;
  
  let colors = ["red", "orange", "yellow", "green", "blue", "purple"];
  this.color = pickRandomColor(colors);
};

// choose a random color
let pickRandomColor = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};

// draw the ball
let circle = function (x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
     ctx.fill();
  } else {
     ctx.stroke();
  }
};

Ball.prototype.draw = function () {
  circle(this.x, this.y, 3, true);

  ctx.fillStyle = this.color;
};

// moving the ball
Ball.prototype.move = function () {
  this.x += this.xSpeed;
  this.y += this.ySpeed;
};

// ball bounce
Ball.prototype.checkCollision = function () {
  if (this.x < 0 || this.x > width) {
    this.xSpeed = -this.xSpeed;
  }

  if (this.y < 0 || this.y > height) {
    this.ySpeed = - this.ySpeed;
  }
};

// ball animation
let ball = [];

for (let i = 0; i < 10; i++){
  ball[i] = new Ball();
}

setInterval(function () {
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < 10; i++) {
    ball[i].draw();
    ball[i].move();
    ball[i].checkCollision();
  }
  ctx.strokeRect(0, 0, width, height);
}, 10);