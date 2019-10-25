// task #1
for (let i = 1; i <= 10; i++) {
   console.log(i);
}

//task #2
const $div = document.querySelector('.container');
let str = '';

for (let i = 1; i <= 10; i++) {
   str += i + ' ';
}

$div.innerHTML = str;

//task #3
const $div1 = document.querySelector('.container1');
let str1 = '';

for (let i = 10; i > 0; i--) {
   str1 += i + ' ';
}

$div1.innerHTML = str1;

// task #4
const $div2 = document.querySelector('.container2');
let str2 = '';

for (let i = 0; i <= 10; i = i + 2) {
   str2 += i + ' ';
}

$div2.innerHTML = str2;

// task #5
const $div3 = document.querySelector('.container3');
let str3 = '';

for (let i = 21; i > 0; i = i - 3) {
   str3 += i + ' ';
}

$div3.innerHTML = str3;

// task #6
let $input = document.querySelector('.container4'),
    $btn = document.querySelector('.btn'),
    $btnClear = document.querySelector('.btn-clear'),
    val = '',
    count = 0;
const $result = document.createElement('div');

$btn.addEventListener('click', () => {

   if (isNaN(+$input.value)) alert('Error: the value should be a number');
   if (+$input.value > 1000) {
      alert('Error: the value should be less then 1000');
   } else {
      for (let i = +$input.value; i > 0; i = i-3) {
         val += i + ' ';
         count += 1;
      }
   }

   console.log(`Iteration's quantity's - ${count}`);

   $result.innerHTML = val;
   $input.value = '';
   $btnClear.insertAdjacentElement("afterend", $result);
});
$btnClear.addEventListener('click', () => {
   $result.remove();
});

// task #7
let $divAll = document.querySelectorAll('.one'),
    $divResult = document.querySelector('.result');
const $div4 = document.createElement('div');
let count1 = 0;
for (let i = 0; i <= $divAll.length; i++) {
   console.log($divAll[i]);
   count1 = i;
   $div4.innerHTML = `Total amount - ${count1}`;
   $divResult.insertAdjacentElement("beforeend", $div4);
}

// task #8
const $btnValue = document.querySelector('.btn-value'),
      $div5 = document.createElement('div'),
      $div6 = document.querySelector('.container5');
let value = '';

$btnValue.addEventListener('click', () => {
   for (let i = 0; i <= $divAll.length; i++) {
      console.log($divAll[i].innerText);
      value += $divAll[i].innerText + ' ';
      $div5.innerHTML = value;
      $div6.insertAdjacentElement("beforeend", $div5);
   }
   console.log('clicked!')
});

// task #9
const $input9 = document.querySelectorAll('input[type="text"]'),
      $btn9 = document.querySelector('.btn9');

$btn9.addEventListener('click', () => {
   for (let i = 0; i < $input9.length; i++) {
      console.log($input9[i].value);
   }

});