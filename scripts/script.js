console.log("Howdy!");

const next = document.getElementById("next");
const back = document.getElementById("back");
const papier = document.querySelector(".papier");
const panels = document.querySelectorAll("section:nth-of-type(1),section:nth-of-type(2),section:nth-of-type(3),section:nth-of-type(4)")

let currentPanelIndex = -1;

papier.addEventListener("click", () => {
    papier.classList.add("transform");
});

next.addEventListener("click", () => {
    // Remove the 'hover' class from the current panel if it's not the initial panel
    if (currentPanelIndex !== -1) {
        panels[currentPanelIndex].classList.remove("hover");
    }

    // Increment the index and use the modulo operator to cycle through the panels
    currentPanelIndex = (currentPanelIndex + 1) % panels.length;

    // Add the 'hover' class to the new current panel
    panels[currentPanelIndex].classList.add("hover");
});

back.addEventListener("click", () => {
    // Remove the 'hover' class from the current panel if it's not the initial panel
    if (currentPanelIndex !== -1) {
        panels[currentPanelIndex].classList.remove("hover");
    }

    // Decrement the index and use the modulo operator to cycle through the panels
    // Add panels.length before applying the modulo operator to ensure the index is always positive
    currentPanelIndex = (currentPanelIndex - 1 + panels.length) % panels.length;

    // Add the 'hover' class to the new current panel
    panels[currentPanelIndex].classList.add("hover");
});