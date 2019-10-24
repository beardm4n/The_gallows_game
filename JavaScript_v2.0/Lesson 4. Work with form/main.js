// task #1

let $first = document.querySelector('.input1'),
    $btn1 = document.querySelector('.btn1'),
    $div1 = document.querySelector('.first');

$btn1.addEventListener('click', () => {

   if ($first.checked) {
      $div1.innerHTML = $first.value;
      console.log($first.checked);
      console.log($first.value);
   } else {
      $div1.innerHTML = '';
      console.log($first.checked);
   }
});

// task #2

let $second = document.querySelector('.input2'),
    $btn2 = document.querySelector('.btn2'),
    $div2 = document.querySelector('.second');

$btn2.addEventListener('click', () => {
   $div2.innerHTML = $second.value;
});

// task #3

let $third = document.querySelector('.input3'),
    $btn3 = document.querySelector('.btn3'),
    $div3 = document.querySelector('.third');
const $span = document.createElement('span');

$btn3.addEventListener('click', () => {
   console.log($third.value);
   console.log($third.value.length);

   if ($third.value.length !== 0) {
      $span.textContent = `Your password is \'${$third.value}\'`;
      $div3.appendChild($span);
   } else {
      $span.textContent = `Field is empty`;
      $div3.appendChild($span);
   }

});

// task #4

let $btn4 = document.querySelector('.btn4'),
    $div4 = document.querySelector('.container');
const $input = document.createElement('input'),
      $button = document.createElement('button');

$button.textContent = 'Check value';

$btn4.addEventListener('click', () => {
   $div4.appendChild($input);
   $div4.appendChild($button);
});

$button.addEventListener('click', () => {
   alert($input.value);
});

// task #5

let $btn5 = document.querySelector('.btn5'),
    $input2 = document.querySelector('.container2');

$btn5.addEventListener('click', () => {
   if ($input2.checked) {
      alert($input2.value);
   } else {
      alert('Sorry, you did\'t entered a value');
   }
});