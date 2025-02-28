function createGrid (gridLength = 16) {
    const container = document.querySelector(".container");
    container.style.setProperty("--grid-length", gridLength);

    for  (let i = 0; i < gridLength * gridLength; i++) {
        let div = document.createElement("div");
        container.appendChild(div);
        // div.style.width =  "calc(100% / gridLength)";

    }
}

createGrid();
hoverEffect();

function hoverEffect() {
    const divs = document.querySelectorAll(".container div");

    divs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            // Generate a random color
            const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            div.style.backgroundColor = randomColor;
        });
    });
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let gridLength = prompt("Enter the number of squares per side for the new grid:", 16);

    //Limit input gridLength to 100 to prevent performance issues
    if (gridLength > 100) {
        alert("The number of squares per side should be less than 100!");
        return;
    }

    //Delete the container div
    const container = document.querySelector(".container");
    document.body.removeChild(container);

    //Create a new container div
    let newContainer = document.createElement("div");
    document.body.appendChild(newContainer);
    newContainer.classList.add("container");

    createGrid(gridLength);
    hoverEffect();
})