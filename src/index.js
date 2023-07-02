import * as basicLightbox from 'basiclightbox';
import "../node_modules/basiclightbox/dist/basicLightbox.min.css";
import { submitHundler, deleteHandler } from "./js/handlers.js";
import { getTask } from './helper/api';
import refs from "./js/refs.js";
import "./styles/style.css";

refs.form.addEventListener("submit", submitHundler);
window.addEventListener("DOMContentLoaded", getTask);
refs.jsmarkup.addEventListener('click', deleteHandler);