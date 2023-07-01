import refs from "./refs.js";

export function submitHundler(e) {
    e.preventDefault();
    const value = refs.input.value;
    
    fetch("http://localhost:7777/items", {
        method: "POST",
        body: JSON.stringify({ text: value }),
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then((response) => response.json())
        .then((data) => jsmarkup.insertAdjacentHTML("beforeend", creatLi(data)))
        .catch((error) => console.log(error));
    
    input.value = "";
}