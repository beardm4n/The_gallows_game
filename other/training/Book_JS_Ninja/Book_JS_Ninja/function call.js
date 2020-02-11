// 1
function sum() {
   let sum = 0;
   for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
   }
   return sum
}
console.log(sum(12,43,511))

function sum1(...args) {
   let sum = 0;
   args.forEach(item => sum += item);
   return sum;
}

console.log(sum1(12,43,511))

// 2
