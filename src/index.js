import * as basicLightbox from 'basiclightbox';
import "../node_modules/basiclightbox/dist/basicLightbox.min.css";
import { submitHundler, deleteHandler } from "./js/handlers.js";
import { getTask } from './helper/api';
import refs from "./js/refs.js";
import "./styles/style.css";

refs.form.addEventListener("submit", submitHundler);
window.addEventListener("DOMContentLoaded", getTask);
refs.jsmarkup.addEventListener('click', deleteHandler);

const getUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then((result) => result.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
}

// getUsers();

const getUsersAsync = async () => {
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/users')
        // const todos = await fetch('https://jsonplaceholder.typicode.com/todos')
        const dataFromServer = await result.json();
        console.log(dataFromServer);
        // return dataFromServer;
    } catch (error) {
        console.log('Error');
    }
}

getUsersAsync();