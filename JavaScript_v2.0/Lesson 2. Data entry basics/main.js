// task #1
console.log('=== Task #1 ===');
let a = 7,
    b = 9,
    c = 7,
    d = 9;
console.log({
   ['a * b']: a * b,
   ['c / d']: c / d,
});

// task #2
console.log('=== Task #2 ===');

let e1 = '3',
    f1 = 5;
console.log(e1 + f1); // просиходит конкатенация, так как скалдывается строка с числом
// а когда любой тип складывется со строкой он приводится к строке

// task #3
console.log('=== Task #3 ===');
let e2 = 3,
    f2 = 0;
console.log(e2 / f2); // infinity

// task #4
console.log('=== Task #4 ===');
let e3 =3,
    f3 = 'Hello';
console.log(e3 + f3); // конкатенация

// task #5
let $input1 = document.querySelector('.input1'),
    $btn1 = document.querySelector('.btn1');

$btn1.addEventListener('click', () => {
   console.log($input1.value);
   $input1.value = '';
});

// task #6
let $input = document.querySelector('.input2'),
    $btn = document.querySelector('.btn2'),
    $div = document.querySelector('.result');

$btn.addEventListener('click', () => {
   if (isNaN($input.value)) {
      alert('Error: input a number');
   } else {
      $div.innerHTML = Number($input.value) * 10;
      $input.value = '';
   }
});

// task #7
let $inputName = document.querySelector('.inputName'),
    $inputSurname = document.querySelector('.inputSurname'),
    $btnGreeting = document.querySelector('.btn3'),
    $greeting = document.querySelector('.greeting');

$btnGreeting.addEventListener('click', () => {
   $greeting.innerHTML = `Hello ${$inputName.value} ${$inputSurname.value}`;
   $inputName.value = '';
   $inputSurname.value = '';
});

// task #8
let $value = document.querySelector('.value');
$value.value = 'Hello';

// task #9
let $color = document.querySelector('.color');
$color.style.border = '4px solid red'; // изменили инлайновый стиль

// task #10
let $inputParse = document.querySelector('.parse'),
    $btnParse = document.querySelector('.btn_parse');

$btnParse.addEventListener('click', () => {
   let t = $inputParse.value;
   t = parseInt(t);
   console.log(t); // принимает строку и возвращает округленное число до целого; отюрасывается буквенная часть, если она находится псоле числа,
   // если перед то результат преобразования будет NaN
});

// task # 11
let $negNum = document.querySelector('.negNum'),
    $negNum1 = document.querySelector('.negNum1'),
    $btnNegNum = document.querySelector('.btn_negNum'),
    $divNegNum = document.querySelector('.div_negNum');

$btnNegNum.addEventListener('click', () => {
   $divNegNum.innerHTML = +($negNum.value) + parseInt($negNum1.value);
});