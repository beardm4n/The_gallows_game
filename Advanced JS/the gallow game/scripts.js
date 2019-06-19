let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

// choose the random word
let pickWord = function() {
   let words = [
      "вышка", "порок", "булыжник", "посол", "заезд", "шарж", "шина", "морс", "озноб", "сахар", "конец", "пресс", "танец", "ось", "буря", "щеголь",
      "антракт", "лидер", "носорог", "трость", "берег", "пласт", "золото", "ножка", "спутник", "ручей", "опрос", "карлик", "изгой", "разум", "кирка", "репей",
      "повар", "кулич", "оранжерея", "храм", "нож", "отзыв", "клык", "память"
   ];

   return words[Math.floor(Math.random() * words.length)].toLowerCase();
};

// create a final array
let setupAnswerArray = function(word){
   let answerArray = [];
   for (let i = 0; i < word.length; i++) {
      answerArray[i] = "_";
   }

   return answerArray;
};

// game progress
let showPlayerProgress = function(answerArray) {
  alert(answerArray.join(" "));
};

// game condition
let getGuess = function() {
  return prompt("Угадайте букву или нажмите 'Отмена' для выхода из игры");
};

// game status
let updateGameState = function(guess, word, answerArray) {
   let count = 0;
   for (let j = 0; j < word.length; j++) {
      if (word[j] === guess) {
         answerArray[j] = guess;
         count++;
      }
   }
   return count;
};

let showAnswerAndCongratulatePlayer = function (answerArray) {
  showPlayerProgress(answerArray);
  alert("Отлично! Была загадано слово " + answerArray.join(""));
};

//drawing
let drawSegment = function (incorrectGuesses) {
  ctx.lineWidth = 4;

  if (incorrectGuesses === 0) {
     ctx.strokeRect(20, 20, 20, 20);
  } else if (incorrectGuesses === 1) {
     ctx.beginPath();
     ctx.moveTo(30, 40);
     ctx.lineTo(30, 80);
     ctx.stroke();
  } else if (incorrectGuesses === 2) {
     ctx.beginPath();
     ctx.moveTo(30, 80);
     ctx.lineTo(10, 110);
     ctx.stroke();
  } else if (incorrectGuesses === 3) {
     ctx.beginPath();
     ctx.moveTo(30, 80);
     ctx.lineTo(50, 110);
     ctx.stroke();
  } else if (incorrectGuesses === 4) {
     ctx.beginPath();
     ctx.moveTo(30, 60);
     ctx.lineTo(10, 50);
     ctx.stroke();
  } else if (incorrectGuesses === 5) {
     ctx.beginPath();
     ctx.moveTo(30, 60);
     ctx.lineTo(50, 50);
     ctx.stroke();
  }
};

let word = pickWord();
let answerArray = setupAnswerArray(word);
let remainingLetters = word.length;
let incorrectGuesses = 0;

while  (remainingLetters > 0) {
   showPlayerProgress(answerArray);
   let guess = getGuess();

   if (guess === null) {
      break;
   } else if (guess.length !== 1) {
      alert("Пожалуйста, введите одиночную букву.");
   } else {
      let correctGuesses = updateGameState(guess, word, answerArray);

      remainingLetters -= correctGuesses;

      if (correctGuesses === 0) {
         drawSegment(incorrectGuesses);
         incorrectGuesses++
      }
   }
}

showAnswerAndCongratulatePlayer(answerArray);
