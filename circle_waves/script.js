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
         drawRing();
      }
   }

   // перенесем отрисовку в центр экрана:
   let centerX = canvas.width / 2;
   let centerY = canvas.height / 2;
   const maxWaveAmplitude = 17;
   const numOfWaves = 7;
   const ringRadius = 150;

   // отрисовка окружности:
   function drawRing() {
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 5;

      ctx.beginPath();
      
      // нарисуем круг: с каждой итерацией будем менять угол 
      // и рисовать линию по окружности
      for (let i = -180; i < 180; i++) {
         // переводим градусы в радианы, чтобы передать их cos и sin, 
         // т.к. они принимают радианы в качестве аргументов
         let currentAngle = i * Math.PI / 180; 

         // эффект перехода из окружности в волну и обратно в окружность
         let displacement = 0;

         let now = Math.abs(i);

         if (i > 70) {
            displacement = (i - 70) / 70;
         }
         
         if (displacement >= 1) displacement = 1;

         // создание волны. для этого исп. метод синуса
         let waveAmplitude = ringRadius + displacement * Math.sin(currentAngle * numOfWaves) * maxWaveAmplitude;

         let x = centerX + Math.cos(currentAngle) * waveAmplitude;
         let y = centerY + Math.sin(currentAngle) * waveAmplitude;
         // добавляем 100 к centerX, чтобы убрать прямую линию, исходящую из центра окружности
         ( i > -180 ) ? ctx.lineTo(x, y) : ctx.moveTo(centerX + ringRadius, centerY);
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