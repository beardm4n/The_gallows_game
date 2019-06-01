let direction = "right",
    offsetDirection = 0;

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
      if (offsetDirection > 200) {
         offsetDirection = 0;
         direction = "down";
      }
   } else if (direction === "down") {
      $("#heading").offset({top: offsetDirection});
      offsetDirection++;
      if (offsetDirection > 200) {
         offsetDirection = 200;
         direction = "left";
      }
   } else if (direction === "left") {
      $("#heading").offset({left: offsetDirection});
      offsetDirection--;
      if (offsetDirection < 0) {
         offsetDirection = 200;
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

setInterval(moveHeading, 10);
