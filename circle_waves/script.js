'use strict';
(() => {
   const canvas = document.querySelector('canvas');
   const ctx = canvas.getContext('2d');
   // const numberOfRings = prompt('How many rings to draw?', 0);
   const numberOfRings = 1;
   // Размер canvas зададим через функцию:
   function init() {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
   }
   init();

   // Создание элементов анимации.
   // параметры отображения волны и окружности:
   function updateRing() {
      for (let i = 0; i < numberOfRings; i++) {
         drawRing()
      }
   }

   // перенесем отрисовку в центр экрана:
   let centerX = canvas.width / 2;
   let centerY = canvas.height / 2;

   // отрисовка окружности:
   function drawRing() {
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 5;

      ctx.beginPath();
      
      // нарисуем круг: с каждой итерацией будем менять угол 
      // и рисовать линию по окружности
      for (let i = 0; i < 360; i++) {
         // переводим градусы в радианы, чтобы передать их cos и sin, 
         // т.к. они принимают радианы в качестве аргументов
         let currentAngle = i * Math.PI / 180; 
         let x = centerX + Math.cos(currentAngle) * 100;
         let y = centerY + Math.sin(currentAngle) * 100;
         // добавляем 100 к centerX, чтобы убрать прямую линию, исходящую из центра окружности
         ( i > 0 ) ? ctx.lineTo(x, y) : ctx.moveTo(centerX + 100, centerY);
      }

      ctx.closePath();
      ctx.stroke();
   }

   // Рекурсивная функция, обновляющая кадры анимации (requestAnimationFrame):
   function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // очищение canvas
      updateRing();
      requestAnimationFrame(loop);
   }
   loop();

   window.addEventListener('resize', init);

})();