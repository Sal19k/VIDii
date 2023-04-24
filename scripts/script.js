console.log("Howdy!");

const next = document.getElementById("next");
const back = document.getElementById("back");
const papier = document.querySelector(".papier");
const pagina1 = document.querySelector("section article:nth-of-type(1)")
const pagina2 = document.querySelector("section article:nth-of-type(2)")
const panels = document.querySelectorAll("section section")

let currentPanelIndex = -1;


next.addEventListener("click", () => {
    // Remove the 'hover' class from the current panel if it's not the initial panel
    if (currentPanelIndex !== -1) {
        panels[currentPanelIndex].classList.remove("hover");
    }
    console.log("currentPanelIndex =", currentPanelIndex);
    pagina1.classList.remove("weg");
    papier.classList.add("transform");

    // Increment the index and use the modulo operator to cycle through the panels
    currentPanelIndex = (currentPanelIndex + 1) % panels.length;

    // Add the 'hover' class to the new current panel
    panels[currentPanelIndex].classList.add("hover");

    if (currentPanelIndex === 8) {
        pagina1.classList.add("weg");
        pagina2.classList.add("transform");
    }
});

back.addEventListener("click", () => {
    if (currentPanelIndex !== -1) {
        panels[currentPanelIndex].classList.remove("hover");
    }

    currentPanelIndex = (currentPanelIndex - 1 + panels.length) % panels.length;
    panels[currentPanelIndex].classList.add("hover");   

    if (currentPanelIndex === 7) {
        pagina1.classList.add("weg");
        papier.classList.remove("transform");
        panels[currentPanelIndex].classList.remove("hover");
    }
});