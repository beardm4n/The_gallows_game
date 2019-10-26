// task #1
const $div1 = document.querySelector('.div1');

for (let i = 0; i < 3; i++) {
   for (let j = 0; j < 3; j++) {
      $div1.innerHTML += '*';
   }
   if (i === 2) {
      $div1.innerHTML += '';
   } else {
      $div1.innerHTML += '_';
   }
}

// task #2
const $div2 = document.querySelector('.div2');

for (let i = 1; i < 4; i++) {
   $div2.innerHTML += `${i} <br>`;

   for (let j = 0; j < 3; j++) {
      $div2.innerHTML += `*_*_*_ <br>`;
   }
}