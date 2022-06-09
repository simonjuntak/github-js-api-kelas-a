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
    text += ` &#x270F; ${paragraph[p]} ${"<br>"}`;

    document.querySelector(".pragraph").innerHTML = text;

    // Debugging
    //console.table(text);
}

