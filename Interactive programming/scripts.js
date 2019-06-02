let direction = "right",
    offsetDirection = 0,
    intervalLength = 25,
    clicks = 0;

// point of origin
$("#heading").offset({
   left: offsetDirection,
   top: offsetDirection
});

// handler function
let moveHeading = function () {
   if (direction === "right") {
      $("#heading").offset({left: offsetDirection});
      offsetDirection++;
      if (offsetDirection > 75) {
         offsetDirection = 0;
         direction = "down";
      }
   } else if (direction === "down") {
      $("#heading").offset({top: offsetDirection});
      offsetDirection++;
      if (offsetDirection > 75) {
         offsetDirection = 75;
         direction = "left";
      }
   } else if (direction === "left") {
      $("#heading").offset({left: offsetDirection});
      offsetDirection--;
      if (offsetDirection < 0) {
         offsetDirection = 75;
         direction = "up";
      }
   } else if (direction === "up") {
      $("#heading").offset({top: offsetDirection});
      offsetDirection--;
      if (offsetDirection < 0) {
         offsetDirection = 0;
         direction = "right";
      }
   }
};

let intervalId = setInterval(moveHeading, intervalLength);

// click on the title
$("#heading").click(function () {
   clearInterval(intervalId);
   intervalLength /= 2.5;
   clicks++;

   if (clicks > 4) {
      $("#heading").text("YOU WON! ヽ(・∀・)ﾉ")
   } else {
      intervalId = setInterval(moveHeading, intervalLength);
   }
});