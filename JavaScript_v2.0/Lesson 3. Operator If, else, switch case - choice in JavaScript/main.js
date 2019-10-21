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

   let date = new Date(),
       currYear = date.getFullYear();

    if ($birthday.value >= 2000) {
       let age = currYear - Number($birthday.value);
       $result1.innerHTML = age;
    } else {
       console.log(currYear - $birthday.value);
    }

   $birthday.value = '';
});

// task #5
let $num = document.querySelector('.num'),
    $btn2 = document.querySelector('.btn2'),
    $result2 = document.querySelector('.result2');

$btn2.addEventListener('click', () => {
   if (+$num.value > 0) {
      $result2.innerHTML = `This number = ${$num.value} = more then zero`;
   } else if (+$num.value < 0) {
      $result2.innerHTML = `This number = ${$num.value} = less then zero`;
   } else {
      $result2.innerHTML = `This number = ${$num.value} = is equal zero`;
   }

   $num.value = '';
});

// task #6
let $num1 = document.querySelector('.num1'),
    $btn3 = document.querySelector('.btn3'),
    $result3 = document.querySelector('.result3');

$btn3.addEventListener('click', () => {
   if ($num1.value % 2 === 0) {
      $result3.innerHTML = 'Even';
   } else {
      $result3.innerHTML = 'Odd';
   }
});

// task #7
let $name = document.querySelector('.greeting'),
    $btn4 = document.querySelector('.btn4'),
    $result4 = document.querySelector('.result4');

$btn4.addEventListener('click', () => {
   const name = $name.value;
   // if ($name.value.length === 0) {
   //    alert('Input is empty');
   // } else if () {
   //
   // }

   $result4.innerHTML = `Hello ${name} !`;
   $name.value = '';
});