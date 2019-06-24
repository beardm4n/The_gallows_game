let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

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

// ball constructor
let Ball = function () {
   this.x = width / 2;
   this.y = height / 2;
   this.xSpeed = 1;
   this.ySpeed = 0;
   this.speed = 5;
   this.radius = 10
};

// method move
Ball.prototype.move = function () {
  this.x += this.xSpeed * this.speed;
  this.y += this.ySpeed * this.speed;

   if (this.x < 0 || this.x > width) {
      this.xSpeed = -this.xSpeed;
   }

   if (this.y < 0 || this.y > height) {
      this.ySpeed = - this.ySpeed;
   }
};

// draw the ball in the current position
Ball.prototype.draw = function () {
  circle(this.x, this.y, this.radius, true);
};

// set the ball direction
Ball.prototype.setDirection = function (direction) {
  if (direction === "up") {
     this.xSpeed = 0;
     this.ySpeed = -this.speed;
  } else if (direction === "down") {
     this.xSpeed = 0;
     this.ySpeed = this.speed;
  } else if (direction === "right") {
     this.ySpeed = 0;
     this.xSpeed = this.speed;
  } else if (direction === "left") {
     this.ySpeed = 0;
     this.xSpeed = -this.speed;
  } else if (direction === "stop") {
     this.xSpeed = 0;
     this.ySpeed = 0;
  }
};

// ball speed
Ball.prototype.setSpeed = function (speed) {
   if (speed === "x") {
      this.speed++;
   } else if (speed === "z") {
      this.speed--;
   }

   if (this.speed === 0) {
      this.speed = 1;
   }
};

// ball size
Ball.prototype.setSize = function (size) {
   if (size === "c") {
      this.radius--;
   } else if (size === "v") {
      this.radius++;
   }

   if (this.radius === 0) {
      this.radius = 1;
   }

};

// create the object
let ball = new Ball();

// keystroke response
let keyAction = {
   32: "stop",
   37: "left",
   38: "up",
   39: "right",
   40: "down"
};

let speeds = {
   88: "x",
   90: "z"
};

let ballSize = {
   67: "c",
   86: "v"
};

// event handler
$("body").keydown(function (event) {
   let direction = keyAction[event.keyCode];
   let speed = speeds[event.keyCode];
   let size = ballSize[event.keyCode];

   ball.setDirection(direction);
   ball.setSpeed(speed);
   ball.setSize(size);
});

// animation function
setInterval(function () {
   ctx.clearRect(0, 0, width, height);

   ball.draw();
   ball.move();

   ctx.strokeRect(0, 0, width, height);
}, 15);