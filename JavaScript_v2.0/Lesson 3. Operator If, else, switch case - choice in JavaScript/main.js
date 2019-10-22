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
       $result1.innerHTML = `${currYear - Number($birthday.value)}`;
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

   if ($name.value.trim().length === 0) {
      alert('Input is empty or space entered');
   } else $result4.innerHTML = `Hello ${name} !`;

   $name.value = '';
});

// task #8
let $house = document.querySelector('.guessHouse'),
    $btn5 = document.querySelector('.btn5'),
    $result5 = document.querySelector('.result5');

$btn5.addEventListener('click', () => {
   if (+$house.value >= 1 && +$house.value <= 5) {
      $result5.innerHTML = '1st street';
   } else if (+$house.value >= 6 && +$house.value <= 11) {
      $result5.innerHTML = '2nd street';
   } else if (+$house.value >= 12 && +$house.value <= 20) {
      $result5.innerHTML = '3rd street';
   }

   $house.value = '';
});

// task #9
let $tax = document.querySelector('.tax'),
    $btn6 = document.querySelector('.btn6'),
    $result6 = document.querySelector('.result6');

$btn6.addEventListener('click', () => {
   if (+$tax.value >= 0 && +$tax.value <= 499) $result6.innerHTML = '2525 KZT';
   if (+$tax.value >= 500 && +$tax.value <= 1199) $result6.innerHTML = '5050 KZT';
   if (+$tax.value >= 1200 && +$tax.value <= 1599) $result6.innerHTML = '8275 KZT';
   if (+$tax.value >= 1600 && +$tax.value <= 1899) $result6.innerHTML = '9675 KZT';
   if (+$tax.value >= 1900 && +$tax.value <= 1999) $result6.innerHTML = '11075 KZT';
   if (+$tax.value >= 2000) $result6.innerHTML = $result6.innerHTML = '15000 KZT';

   $tax.value = '';
});