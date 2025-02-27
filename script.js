const container = document.querySelector(".container");

for  (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    container.appendChild(div);
}

const divs = document.querySelectorAll(".container div");

divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "red";
    });
});