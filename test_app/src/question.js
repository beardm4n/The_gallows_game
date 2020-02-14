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
            console.log(response)
            question.id = response.name;
            console.warn(question.id);
            console.warn(question);
            return question;
         })
         .then(addToLocalStorage)
         // .catch(err => console.error(err))
   }
}
// создали приватную функцию добавили вопрос в localStorage
function addToLocalStorage(question) {
   const all = getQuestionFromLocalStorage();

   all.push(question);
   localStorage.setItem('question', JSON.stringify(all));
}
// забираем значение из localStorage: если еще не создано вызовращаем пустой массив.
// парсим, потому что localStorage.getItem() возвращает строку, а нам нужен объект, чтобы работать дальше
function getQuestionFromLocalStorage() {
   return JSON.parse(localStorage.getItem('question') || '[]')
}