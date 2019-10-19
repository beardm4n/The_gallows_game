// task #1
console.log('=== TASK#1 ===');
let a = 4;
if (a === 4) console.log('TRUE');

// task #2
console.log('=== TASK#2 ===');
let b = 8,
    c = 10;
if (b > c) {
   console.log(`B больше C`);
} else if (b < c) {
   console.log(`C больше B`);
}

// task #3
let $first = document.querySelector('.first'),
    $second = document.querySelector('.second'),
    $btn = document.querySelector('.btn'),
    $result = document.querySelector('.result');

$btn.addEventListener('click', () => {
   if ($first.value > $second.value) {
      $result.innerHTML = $first.value;
   } else if ($first.value < $second.value) {
      $result.innerHTML = $second.value;
   } else $result.innerHTML = 'Equal';
});

// task #4
let $birthday = document.querySelector('.birthday'),
    $btn1 = document.querySelector('.btn1'),
    $result1 = document.querySelector('.result1');

$btn1.addEventListener('click', () => {
   console.log($birthday.value);
   console.log($birthday.value.split('-'));
   let d = $birthday.value.split('-');
   let date = new Date(d[2], d[1], d[0]);
   // console.log(date);
   // let date = new Date(),
   //     currDate = date.getDay(),
   //     currMonth = date.getMonth(),
   //     currYear = date.getFullYear();
   // console.log(date);
   // console.log(currDate);
   // console.log(currMonth);
   // console.log(currYear);
   // console.log(`${currYear}-${currMonth}-${currDate}`);

});