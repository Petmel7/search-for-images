import { createTask, createTaskAxios, deleteTask } from "../helper/api.js";
import { deleteTaskAxios } from "../helper/api.js";
import { creatLi } from "../js/templateStringHandler.js";
import refs from "./refs.js";

// export function submitHundler(e) {
//     e.preventDefault();
//     const value = input.value;
//     createTaskAxios(value);
//     input.value = "";
// }

// export function createList(array) {
//     const list = array.map((task) => creatLi(task)).join("")
//     refs.jsmarkup.insertAdjacentHTML("beforeend", list)
// }

// export function deleteHandler(event) {
//     if (event.target.dataset.id) {
//         const id = event.target.dataset.id;
//         deleteTaskAxios(id);
//     }
// }

// //! Функція видалення елемента з інтерфейсу

// export function deleteUi(id) {
//     const button = document.querySelector(`[data-id='${id}']`);
//     const li = button.parentElement;
//     li.remove();
// }