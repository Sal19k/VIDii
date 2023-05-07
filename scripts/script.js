console.log("Howdy!");

const next = document.getElementById("next");
const back = document.getElementById("back");

const spiderman = document.querySelector("img");
const tekst1 = document.querySelectorAll("section:nth-of-type(2) section:nth-of-type(1) a");
const tekst2 = document.querySelectorAll("section:nth-of-type(2) section:nth-of-type(2) a");
const tekst3 = document.querySelectorAll("section:nth-of-type(2) section:nth-of-type(3) a");


const panels = document.querySelectorAll("li section section")

let currentPanelIndex = -1;

next.addEventListener("click", () => {
    // Remove the 'hover' class from the current panel if it's not the initial panel
    if (currentPanelIndex > 0) {
        panels[currentPanelIndex].classList.remove("hover");
    }

    console.log("currentPanelIndex =", currentPanelIndex);
    spiderman.classList.add("show");
    

    // Increment the index and use the modulo operator to cycle through the panels

        currentPanelIndex = (currentPanelIndex + 1) % panels.length;


    // Add the 'hover' class to the new current panel
    if (currentPanelIndex > 0) {
        panels[currentPanelIndex].classList.add("hover");

        // Iterate through the text elements
        tekst1.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add("show");
            }, 700 * index); // Set a delay for each text element (100ms * index)
        });
    }

    if (currentPanelIndex > 1) {

        // Iterate through the text elements
        tekst2.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add("show");
            }, 700 * index); // Set a delay for each text element (100ms * index)
        });
    }

    if (currentPanelIndex > 2) {

        // Iterate through the text elements
        tekst3.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add("show");
            }, 700 * index); // Set a delay for each text element (100ms * index)
        });
    }



    // Add delay for the second 'a' element




    if (currentPanelIndex > -1) {
        document.querySelector("li:nth-of-type(1)").classList.add("omgeslagen");
    }
    
    if (currentPanelIndex > 8) {
        document.querySelector("li:nth-of-type(2)").classList.add("omgeslagen");    
    }

});





back.addEventListener("click", () => {
    if (currentPanelIndex !== -1) {
        panels[currentPanelIndex].classList.remove("hover");
    }

    if (currentPanelIndex < 2) {
        document.querySelector("li:nth-of-type(1)").classList.remove("omgeslagen");
    }

    currentPanelIndex = (currentPanelIndex - 1 + panels.length) % panels.length;
    panels[currentPanelIndex].classList.add("hover");

    if (currentPanelIndex === 7) {
        panels[currentPanelIndex].classList.remove("hover");

    }
    if (currentPanelIndex < 9) {
        document.querySelector("li:nth-of-type(2)").classList.remove("omgeslagen");
    }
});