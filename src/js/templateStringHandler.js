import refs from "./refs.js";
// // import serverData from "../data/serverData.js";
// // import questionsTemplate from "../templates/questions.hbs";

export function submitHundler(e) {
    e.preventDefault();
    const value = refs.input.value;
    // serverData.push(value);
    // refs.input.value = "";
    // const markup = questionsTemplate(serverData);
    // refs.root.innerHTML = markup;
    fetch("http://localhost:7777/items", {
        method: "POST",
        body: JSON.stringify({ text: value }),
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
    // refs.ul.insertAdjacentHTML("beforeend", creatLi(value));
    refs.input.value = "";
}