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
});