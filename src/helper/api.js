import axios from "axios";
import refs from "../js/refs.js";
import { creatLi } from "../js/templateStringHandler.js";
import { createList, deleteUi } from "../js/handlers.js";

// !Код fetch

// export function createTask(value) {
//     fetch("http://localhost:7777/items", {
//         method: "POST",
//         body: JSON.stringify({ text: value }),
//         headers: {
//             "Content-Type": "application/json"
//         },
//     })
//         .then((response) => response.json())
//         .then((data) => jsmarkup.insertAdjacentHTML("beforeend", creatLi(data)))
//         .catch((error) => console.log(error));
// }

// export function deleteTask(id) {
//     fetch(`http://localhost:7777/items/${id}`, {
//         method: 'DELETE',
//         headers: {
//             "Content-Type": "application/json"
//         },
//     })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// }

// !Код axios

export function createTaskAxios(value) {
    axios.post("http://localhost:7777/items", { text: value })
        .then((result) =>
            refs.jsmarkup.insertAdjacentHTML("beforeend", creatLi(result.data)))
            .catch((error) => console.log(error));
}

export function getTask() {
    axios.get("http://localhost:7777/items")
        .then((result) => createList(result.data))
        .catch((error) => console.log(error));
}

export function deleteTaskAxios(id) {
    axios.delete(`http://localhost:7777/items/${id}`)
    .then((result) => deleteUi(id))
    .catch((error) => console.log(error));
}

export function putTaskAxios(id, value) {
    axios.put(`http://localhost:7777/items/${id}`, { text: value })
        .then((result) =>
            refs.jsmarkup.insertAdjacentHTML("beforeend", creatLi(result.data)))
    .catch((error) => console.log(error));
}

