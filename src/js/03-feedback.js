import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input');

populateTextarea();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
 formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
    event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
    
  let savedMessage = localStorage.getItem(STORAGE_KEY);
  
  if (savedMessage) {
    savedMessage = JSON.parse(savedMessage);
    Object.entries(savedMessage).forEach(([name, value]) => {
      formData[name] = value;
      form.elements[name].value = value;
    });
    }
    } 

