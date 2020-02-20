// здесь будут содержаться вся логика и все сущности, которые относятся к вопросам
// для того, чтобы собрать функции, сгруппировать в одно целое, создадим класс:
export class Question {
   static create(question) {
      return fetch('https://test-app-6604b.firebaseio.com/questions.json', {
         method: 'POST',
         body: JSON.stringify(question),
         headers: {
            'Content-Type': 'application/json',
         },
      })
         .then(response => response.json())
         .then(response => {
            question.id = response.name;
            return question;
         })
         .then(addToLocalStorage)
         .then(Question.renderList)
         .catch(err => console.error(err))
   }
   // создадим статический метод для отрисовки данных на странице
   static renderList() {
      const question = getQuestionFromLocalStorage();

      //создадим базовый html, который будет содержать в себе все основные карточки для отображения инфы
      const html = question.length 
         ? question.map(toCard).join('')
         : `<div class="mui--text-headline">Вопросов нет</div>`;

      // теперь надо выбрать объект куда будем вставлять полученный html
      const list = document.getElementById('list');

      list.innerHTML = html;
   }
}
// создали приватную функцию добавили вопрос в localStorage
function addToLocalStorage(question) {
   const all = getQuestionFromLocalStorage();

   all.push(question);
   localStorage.setItem('questions', JSON.stringify(all));
}
// забираем значение из localStorage: если еще не создано вызовращаем пустой массив.
// парсим, потому что localStorage.getItem() возвращает строку, а нам нужен объект, чтобы работать дальше
function getQuestionFromLocalStorage() {
   return JSON.parse(localStorage.getItem('questions') || '[]')
}
// функция для отрисовки вопросов
function toCard(question) {
   return `
      <div class="mui--text-black-54">
         ${new Date(question.date).toLocaleDateString()}
         ${new Date(question.date).toLocaleTimeString()}
      </div>
      <div>
         ${question.text}
      </div>
      <br>
   `
}