// choose the random word
let words = [
   "вышка", "порок", "булыжник", "посол", "заезд", "шарж", "шина", "морс", "озноб", "сахар", "конец", "пресс", "танец", "ось", "буря", "щеголь",
   "антракт", "лидер", "носорог", "трость", "берег", "пласт", "золото", "ножка", "спутник", "ручей", "опрос", "карлик", "изгой", "разум", "кирка", "репей",
   "повар", "кулич", "оранжерея", "храм", "нож", "отзыв", "клык", "память"
];

let word = words[Math.floor(Math.random() * words.length)].toLowerCase();

// create a final array
let finalArray = [];

for (let i = 0; i < word.length; i++) {
   finalArray[i] = "_";
}

let remainingLetters = word.length,
    count = 0;

// game cycle
while (remainingLetters > 0 && count !== 11) {
   // display game status
   alert(finalArray.join(" "));

   // check entered answer
   let guess = prompt("Угадайте букву или нажмите 'Отмена' для выхода").toLowerCase();

   if (guess === null) {
      break;
   } else if (guess.length !== 1) {
      alert("Введите только одну букву");
   } else {
      // refresh game status
      for (let j = 0; j < word.length; j++) {

         if (word[j] === guess && finalArray[j] === "_") {
            finalArray[j] = guess;
            remainingLetters--;
         }
      }
   }
   count++;
}

if (count === 11) {
   alert("Вы проиграли =(. Загаданное слово " + word);
} else {
   alert("Вы угадали! Это слово - " + word);
}