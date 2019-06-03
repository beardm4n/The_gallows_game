// counter
let clicks = 0;

// we need to get a random number for treasure
let getRandomNumber = function(size) {
  return Math.random(Math.floor() * size);
};

// set treasure's coordinates
let width = 400,
    height = 400;

let target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height)
};

// event handler
$("#map").click(function (event) {
   clicks++;

// click to treasure distance
   let getDistance = function (event, target) {
      let diffX = event.offsetX - target.x,
          diffY = event.offsetY - target.y;

      return Math.sqrt((diffX * diffX) + (diffY * diffY));
   }
});