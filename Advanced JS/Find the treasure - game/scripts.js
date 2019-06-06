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
   if (distance < 15) {
      return "Get burned 🔥"
   } else if (distance < 30) {
      return "Very hot"
   } else if (distance < 60) {
      return "Hot";
   } else if (distance < 120) {
      return "Heat"
   } else if (distance < 240) {
      return "Coldly"
   } else if (distance < 480) {
      return "Very cold ❄"
   }
};

let clicks = 0,
    maxClicks = 20,
    width = 600,
    height = 600;

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
   maxClicks--;

   // we get the distance from the click to the treasure
   let distance = getDistance(event, target);

   // convert distance to hint
   let distanceHint = getDistanceHint(distance);

   // write a new hint to the #distance
   $("#distance").text(distanceHint);

   // win check
   if (distance < 12) {
      alert("Treasure found! You made " + clicks + " clicks");
   }

   // remaining clicks
   if (clicks > 15) {
      $("#clickStatus").text("Left " + maxClicks + " clicks");
   }

   // click restrictions
   if (clicks  > 19) {
      alert("Game over");
      $("#clickStatus").text("Left " + maxClicks + " clicks").remove();
   }
});

   // page reset button
   document.querySelector("#btn").onclick = function() {
      window.location.reload();
   };