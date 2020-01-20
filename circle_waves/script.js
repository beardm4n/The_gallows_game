(() => {
   const canvas = document.querySelector('canvas');
   const ctx = canvas.getContext('2d');

   // размер canvas зададим через функцию:
   function init() {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
   }

   init();
})();