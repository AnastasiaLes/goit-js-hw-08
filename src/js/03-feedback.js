import lodash, { throttle } from 'lodash';

const { stringify } = require("querystring");


const form = document.querySelector('.feedback-form');
const formMessage = document.querySelector('.feedback-form textarea');
const formEmail = document.querySelector('.feedback-form input');
const submitBtn = document.querySelector('.feedback-form button')
let feedbackFormData = {
    // email: formEmail.value,
    // message: formMessage.value
};


const STORAGE_KEY = 'feedback-form-state';
const obj = JSON.parse(localStorage.getItem(STORAGE_KEY));

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500) );

populateTextarea(obj);

function onFormSubmit(event) {
    event.preventDefault();
    event.target.reset();
    console.log(obj);
    localStorage.removeItem(STORAGE_KEY);  
}

function onTextareaInput(event) {

    feedbackFormData[event.target.name] = event.target.value;
    // console.log(feedbackFormData);
    if (feedbackFormData) {
        feedbackFormData.email = formEmail.value,
        feedbackFormData.message = formMessage.value  
       }
        
    const stringifiedData = JSON.stringify(feedbackFormData)
    localStorage.setItem(STORAGE_KEY, stringifiedData);
   
}

function populateTextarea() {
    if (obj) {
        formEmail.value = obj.email;
        formMessage.value = obj.message;
    };
   
}

