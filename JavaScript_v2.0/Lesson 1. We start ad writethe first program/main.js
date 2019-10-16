//task #1
document.getElementById('one').innerHTML = 'Hello world';

//task #2
document.getElementById('two').innerHTML = `${12 * 12}`;

//task #3
document.querySelector('span').innerHTML = 'world!';

//task #4
document.querySelector('.three').innerHTML = `<h3>Hi!</h3>`;

//task #5
let $four = document.querySelector('.four');
let $h4 = document.createElement('h4');
let $p = document.createElement('p');

$h4.innerHTML = 'it\'s a wonderful world';
$p.innerHTML = 'yes';
$p.innerHTML += ' of course';

$four.appendChild($h4);
$four.appendChild($p);

// task $6
let y1 = 6,
    y2 = 3;
document.querySelector('.five').innerHTML = `${y1 / y2}`;

//task #7
let d2 = document.querySelector('.test-2');
console.log(d2); //сначала мы записали в переменную d2 значение равное html-элементу,
d2 = 5;
console.log(d2); //затем переписали значение на число




