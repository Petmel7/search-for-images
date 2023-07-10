import * as basicLightbox from 'basiclightbox';
import "../node_modules/basiclightbox/dist/basicLightbox.min.css";
// import { submitHundler, deleteHandler } from "./js/handlers.js";
// import { getTask } from './helper/api';
import refs from "./js/refs.js";
import "./styles/style.css";

//!Імпорти пошуку зображень

import axios from "axios";
// import 'pnotify/dist/PNotify.css';
import imagesHbs from "../src/templates/marking.hbs";
// PNotify.alert('Це приклад повідомлення PNotify!');

// refs.form.addEventListener("submit", submitHundler);
// window.addEventListener("DOMContentLoaded", getTask);
// refs.jsmarkup.addEventListener('click', deleteHandler);

// const getUsers = () => {
//     return fetch('https://jsonplaceholder.typicode.com/users')
//         .then((result) => result.json())
//         .then((data) => console.log(data))
//         .catch((error) => console.log(error));
// }

// // getUsers();

// const getUsersAsync = async () => {
//     try {
//         const result = await fetch('https://jsonplaceholder.typicode.com/users')
//         // const todos = await fetch('https://jsonplaceholder.typicode.com/todos')
//         const dataFromServer = await result.json();
//         console.log(dataFromServer);
//         // return dataFromServer;
//     } catch (error) {
//         console.log('Error');
//     }
// }

// // getUsersAsync();

//!Пошук зображень

let curentPage = 1;

const handlerSubmit = (e) => {
    e.preventDefault()
    const value = refs.input.value;

    axios.get(`https://pixabay.com/api/?key=22926721-5d20aa08498ffd1ff2f906542&q=${value}&image_type=photo&${curentPage}`)
        .then(response => {
            renderCollection(response.data.hits)
            // console.log(response.data.hits)
            clearInput();
        })
        .then(() => curentPage++)
        .catch(error => {
            console.log(error);
        });
}

function renderCollection(hits) {

    const markup = imagesHbs(hits)
    refs.jsmarkup.insertAdjacentHTML("beforeend", markup);
}

function clearInput() {
    refs.input.value = "";
}

function eventTarget(event) {
    if (event.target.tagName === "IMG") {
        clickBasicLightbox(event.target) 
    }
}

function clickBasicLightbox(img) {
    const instance = basicLightbox.create(`
    <img src="${img.src}" width="800" height="600">
`)

    instance.show();
}
refs.jsmarkup.addEventListener("click", eventTarget);
refs.form.addEventListener("submit", handlerSubmit);



//!Другий варіант рішення

// refs.jsmarkup.addEventListener("click", function (event) {
//     if (event.target.tagName === "IMG") {
//     clickBasicLightbox(event.target);
//     }
// });

// function clickBasicLightbox(img) {
//     const instance = basicLightbox.create(`
//     <img src="${img.src}" width="800" height="600">
//     `);

//     instance.show();
// }



const scene = new ScrollMagic.Scene();

const triggerElement = document.querySelector('.trigger-element');
scene.triggerElement(triggerElement);

const targetElement = document.querySelector('.target-element');
scene.setClassToggle(targetElement, 'active');

const controller = new ScrollMagic.Controller();
controller.addScene(scene);

controller.update();


