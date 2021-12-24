import lodash, { throttle } from 'lodash';

const { stringify } = require("querystring");

console.log('Hello world');
const form = document.querySelector('.feedback-form');
const message = document.querySelector('.feedback-form textarea');
const email = document.querySelector('.feedback-form input');
let feedbackFormData = {};

const STORAGE_KEY = 'feedback-form-state';
const obj = JSON.parse(localStorage.getItem(STORAGE_KEY));
// console.dir(form);

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500) );

populateTextarea(feedbackFormData);

function onFormSubmit(event) {
    event.preventDefault();
    event.target.reset();
    console.log(obj);
    localStorage.removeItem(STORAGE_KEY);
    
}

function onTextareaInput(event) {
    feedbackFormData[event.target.name] = event.target.value;
    // console.log(feedbackFormData);
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormData));
}

function populateTextarea() {
    let savedForm = {};

    
    if (obj) {
        message.value = obj.message;
        email.value = obj.email;
        // console.log(obj);
    };
}

