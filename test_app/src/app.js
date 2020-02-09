import { Question } from './question';
import { isValid } from './utils';
import './style.css';

const form = document.getElementById('form');

// для того, чтобы не делать запрос к input и button по всему document, обратимся к form
const input = form.querySelector('#question-input');
const submitBtn = form.querySelector('#submit');

form.addEventListener('submit', submitFormHandler);
// добавим валидацию input, по которой будет активна кнопка отправки
input.addEventListener('input', () => {
   submitBtn.disabled = !isValid(input.value);
})

function submitFormHandler(event) {
   event.preventDefault(); // отменяем поведение по умолчанию, в данном случае - обновление страницы

   if (isValid(input.value)) {
      const question = {
         text: input.value.trim(),
         date: new Date().toJSON(),
      }
      
      // заблокируем форму пока будет идти запрос на сервер
      submitBtn.disabled = true;
      // Async request to srver to save question
      Question.create(question).then(() => {
         input.value = '';
         input.className = '';
         submitBtn.disabled = false;
      })
   } 
}
