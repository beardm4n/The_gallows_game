// constructor function
let Car = function (x, y) {
   this.x = x;
   this.y = y;
   this.draw();
};

// draw cars
Car.prototype.draw = function () {
   let carHTML = '<img src="img/car.png">';

   this.carElement = $(carHTML);

   this.carElement.css({
      position: "absolute",
      left: this.x,
      top: this.y
   });

   $("body").append(this.carElement);
};

Car.prototype.moveRight = function () {
  this.x += Math.floor(Math.random() * 50);

  this.carElement.css({
     left: this.x,
     top: this.y
  });
};

Car.prototype.moveLeft = function () {
   this.x -= Math.floor(Math.random() * 50);

   this.carElement.css({
      left: this.x,
      top: this.y
   });
};

Car.prototype.moveUp = function () {
   this.y -= Math.floor(Math.random() * 50);

   this.carElement.css({
      left: this.x,
      top: this.y
   });
};

Car.prototype.moveDown = function () {
   this.y += Math.floor(Math.random() * 50);

   this.carElement.css({
      left: this.x,
      top: this.y
   });
};

// constructor test
let tesla = new Car(20, 20);
console.log(tesla);

let nissan = new Car(100, 200);
console.log(nissan);