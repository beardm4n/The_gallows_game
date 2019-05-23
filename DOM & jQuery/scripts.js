// create freinds array
for (let i = 0; i < 3; i++) {
   let name = prompt("What's your friend's name?");

   $("body").append("<p>" + name + "</p>");
}
$("p").append(" - the best!").hide(0).fadeIn(6000)

//change h1 element
$("h1").text("My friends").fadeIn(0);

// blinking header
for (let i = 0; i < 5; i++) {
   if (i === 0) {
      $("h1").fadeOut(0).fadeIn(1000);
   } else if (i === 1) {
      $("h1").fadeOut(0).fadeIn(2000);
   } else if (i === 2) {
      $("h1").fadeOut(0).fadeIn(3000);
   } else if (i === 3) {
      $("h1").fadeOut(0).fadeIn(4000);
   } else if (i === 4) {
      $("h1").fadeOut(0).fadeIn(5000);
   }
}

// delayed animation
$("h2").fadeOut().delay(5000).fadeIn();

$("span").fadeTo(3000, 0.3);