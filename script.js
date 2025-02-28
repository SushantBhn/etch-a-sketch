function createGrid (gridLength = 16) {
    const container = document.querySelector(".container");
    container.style.setProperty("--grid-length", gridLength);

    for  (let i = 0; i < gridLength * gridLength; i++) {
        let div = document.createElement("div");
        container.appendChild(div);
        // Initialize the opacity data attribute
        div.dataset.opacity = 0;
        // div.style.width =  "calc(100% / gridLength)";
    }
}

createGrid();
hoverEffect();

function hoverEffect() {
    const divs = document.querySelectorAll(".container div");

    divs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            // Increment the opacity value
            let currentOpacity = parseFloat(div.dataset.opacity);
            currentOpacity = Math.min(currentOpacity + 0.1, 1); // Ensure opacity does not exceed 1
            div.dataset.opacity = currentOpacity;

            // Generate a random color with the updated opacity
            const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${currentOpacity})`;
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