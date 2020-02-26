import { Question } from './question';
import { createModal, isValid } from './utils';
import { getAuthForm } from './authorization';
import './style.css';

const form = document.getElementById('form');
const modalBtn = document.getElementById('modal-btn');

// для того, чтобы не делать запрос к input и button по всему document, обратимся к form
const input = form.querySelector('#question-input');
const submitBtn = form.querySelector('#submit');

form.addEventListener('submit', submitFormHandler);
// добавим валидацию input, по которой будет активна кнопка отправки
input.addEventListener('input', () => {
   submitBtn.disabled = !isValid(input.value);
})
modalBtn.addEventListener('click', openModal);

function submitFormHandler(event) {
   event.preventDefault(); // отменяем поведение по умолчанию, в данном случае - обновление страницы

   if (isValid(input.value)) {
      const body = document.querySelector('body');
      const question = {
         text: input.value.trim(),
         date: new Date().toJSON(),
      }
      // отображение preloader
      body.classList.add('loaded_hiding');
      body.classList.remove('loaded');
      
      // заблокируем кнопку пока будет идти запрос на сервер
      submitBtn.disabled = true;
      // Async request to server to save question
      Question.create(question).then(() => {
         // скрытие preloader
         body.classList.add('loaded');
         body.classList.remove('loaded_hiding');
         // очищаем форму и разблокируем кнопку после завершения запроса
         input.value = '';
         input.className = '';
         submitBtn.disabled = false;
      })
   }
}

function openModal() {
   createModal('Autorization', getAuthForm());
}