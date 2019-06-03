// we need to get a random number for treasure
let getRandomNumber = function(size) {
  return Math.floor(Math.random() * size);
};

// click to treasure distance
let getDistance = function (event, target) {
   let diffX = event.offsetX - target.x,
       diffY = event.offsetY - target.y;

   return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

// tell the player how close he is to the target
let getDistanceHint = function (distance) {
   if (distance < 10) {
      return "Get burned"
   } else if (distance < 20) {
      return "Very hot"
   } else if (distance < 40) {
      return "Hot"
   } else if (distance < 80) {
      return "Heat"
   } else if (distance < 160) {
      return "Coldly"
   } else if (distance < 320) {
      return "Very cold"
   }
};

let clicks = 0,
    width = 400,
    height = 400;

// set treasure's random coordinates
let target = {
   x: getRandomNumber(width),
   y: getRandomNumber(height)
};
console.log(target.x);
console.log(target.y);

// event handler
$("#map").click(function (event) {
   clicks++;

   // we get the distance from the click to the treasure
   let distance = getDistance(event, target);

   // convert distance to hint
   let distanceHint = getDistanceHint(distance);

   // write a new hint to the #distance
   $("#distance").text(distanceHint);

   // win check
   if (distance < 8) {
      $("#win").text("Treasure found! You made " + clicks + " clicks");
      // alert("Treasure found! You made " + clicks + " clicks");
   }
});

