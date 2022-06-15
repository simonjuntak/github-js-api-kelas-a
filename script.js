// Title
const title = "JavaScript with API DTS FGA Bacth 2 x Progate";

document.querySelector(".title").innerHTML = title;

// Themes
const paragraph = [
    "Belajar GIT menggunakan Github",
    "Belajar JavaScript",
    "Belajar API",
];

let text = "";

for (let p = 0; p <= 2; p++) {
    text += `&#x270F ${paragraph[p]} ${"<br>"}`;

    document.querySelector(".pragraph").innerHTML = text;

    // Debugging
    //console.table(text);
}

// Loading
const wait = (delay = 0) =>
    new Promise (resolve => setTimeout(resolve, delay));

const setVisible = (elementOrSelector, visible) =>
    (typeof elementOrSelector === "string"
    ? document.querySelector(elementOrSelector) : elementOrSelector).style.display = visible ? "block" : "none";

setVisible(".page", false);
setVisible("#loading", true);

document.addEventListener("DOMContentLoaded", () => wait(2500).then (() => {
    setVisible(".page", true);
    setVisible("#loading", false);
}));

//get quote random with api
fetch('https://api.quotable.io/random')
.then((response)=>{
    if(response.status != 200) {
        console.log("Error " + response.status)
        return
    }
    response.json().then((data)=>{
        const quote = data;
        document.querySelector(".quote").insertAdjacentHTML('beforeend', 
            `<h3>${quote.author}</h3>
            <i>${quote.content}</i>`
        )
    })
})