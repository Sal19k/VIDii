console.log("Howdy!");

const next = document.getElementById("next");
const back = document.getElementById("back");

const spiderman = document.querySelector("img");
const tekst1 = document.querySelectorAll("li:nth-of-type(1) section:nth-of-type(2) section:nth-of-type(1) p");
const tekst2 = document.querySelectorAll("li:nth-of-type(1) section:nth-of-type(2) section:nth-of-type(2) p");
const tekst3 = document.querySelectorAll("li:nth-of-type(1) section:nth-of-type(2) section:nth-of-type(3) p");
const tekst4 = document.querySelectorAll("li:nth-of-type(1) section:nth-of-type(2) section:nth-of-type(4) p");

const tekst5 = document.querySelectorAll("li:nth-of-type(2) section:nth-of-type(1) section:nth-of-type(1) p");
const tekst6 = document.querySelectorAll("li:nth-of-type(2) section:nth-of-type(1) section:nth-of-type(2) p");
const tekst7 = document.querySelectorAll("li:nth-of-type(2) section:nth-of-type(1) section:nth-of-type(3) p");
const tekst8 = document.querySelectorAll("li:nth-of-type(2) section:nth-of-type(1) section:nth-of-type(4) p");

const tekst9 = document.querySelectorAll("li:nth-of-type(2) section:nth-of-type(2) section:nth-of-type(1) p");
const tekst10 = document.querySelectorAll("li:nth-of-type(2) section:nth-of-type(2) section:nth-of-type(2) p");
const tekst11 = document.querySelectorAll("li:nth-of-type(2) section:nth-of-type(2) section:nth-of-type(3) p");
const tekst12 = document.querySelectorAll("li:nth-of-type(2) section:nth-of-type(2) section:nth-of-type(4) p");

const tekst13 = document.querySelectorAll("li:nth-of-type(3) section:nth-of-type(1) section:nth-of-type(1) p");
const tekst14 = document.querySelectorAll("li:nth-of-type(3) section:nth-of-type(1) section:nth-of-type(2) p");
const tekst15 = document.querySelectorAll("li:nth-of-type(3) section:nth-of-type(1) section:nth-of-type(3) p");
const tekst16 = document.querySelectorAll("li:nth-of-type(3) section:nth-of-type(1) section:nth-of-type(4) p");

const panels = document.querySelectorAll("li section section")

let currentPanelIndex = 0;

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

    if (currentPanelIndex > 3) {

        // Iterate through the text elements
        tekst4.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add("show");
            }, 700 * index); // Set a delay for each text element (100ms * index)
        });
    }

    if (currentPanelIndex > 4) {

        // Iterate through the text elements
        tekst5.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add("show");
            }, 700 * index); // Set a delay for each text element (100ms * index)
        });
    }

    if (currentPanelIndex > 5) {

        // Iterate through the text elements
        tekst6.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add("show");
            }, 700 * index); // Set a delay for each text element (100ms * index)
        });
    }


    if (currentPanelIndex > 6) {

        // Iterate through the text elements
        tekst7.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add("show");
            }, 700 * index); // Set a delay for each text element (100ms * index)
        });
    }


    if (currentPanelIndex > 7) {

        // Iterate through the text elements
        tekst8.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add("show");
            }, 700 * index); // Set a delay for each text element (100ms * index)
        });
    }

    if (currentPanelIndex > 8) {

        // Iterate through the text elements
        tekst9.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add("show");
            }, 700 * index); // Set a delay for each text element (100ms * index)
        });
    }

    if (currentPanelIndex > 9) {

        // Iterate through the text elements
        tekst10.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add("show");
            }, 700 * index); // Set a delay for each text element (100ms * index)
        });
    }

    if (currentPanelIndex > 10) {

        // Iterate through the text elements
        tekst11.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add("show");
            }, 700 * index); // Set a delay for each text element (100ms * index)
        });
    }

    if (currentPanelIndex > 11) {

        // Iterate through the text elements
        tekst12.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add("show");
            }, 700 * index); // Set a delay for each text element (100ms * index)
        });
    }

    if (currentPanelIndex > 12) {

        // Iterate through the text elements
        tekst13.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add("show");
            }, 700 * index); // Set a delay for each text element (100ms * index)
        });
    }

    if (currentPanelIndex > 13) {

        // Iterate through the text elements
        tekst14.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add("show");
            }, 700 * index); // Set a delay for each text element (100ms * index)
        });
    }

    if (currentPanelIndex > 14) {

        // Iterate through the text elements
        tekst15.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add("show");
            }, 700 * index); // Set a delay for each text element (100ms * index)
        });
    }

    if (currentPanelIndex > 15) {

        // Iterate through the text elements
        tekst16.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add("show");
            }, 700 * index); // Set a delay for each text element (100ms * index)
        });
    }

    if (currentPanelIndex > 0) {
        document.querySelector("li:nth-of-type(1)").classList.add("omgeslagen");
    }

    if (currentPanelIndex > 4) {
        document.querySelector("body").classList.add("black")  
    }
    
    if (currentPanelIndex > 8) {
        document.querySelector("li:nth-of-type(2)").classList.add("omgeslagen");  
    }

    if (currentPanelIndex > 8) {
        document.querySelector("body").classList.remove("black")  
        document.querySelector("body").classList.add("gray")  
    }

    if (currentPanelIndex > 12) {
        document.querySelector("body").classList.remove("gray")  
        document.querySelector("body").classList.add("roze")  
    }

    if (currentPanelIndex > 15) {
        document.querySelector("li:nth-of-type(3)").classList.add("omgeslagen");    

        document.querySelector("body").classList.remove("roze")  
    }

    
});

back.addEventListener("click", () => {
    console.log("currentPanelIndex =", currentPanelIndex);

    if (currentPanelIndex !== -1) {
        panels[currentPanelIndex].classList.remove("hover");
    }

    if (currentPanelIndex < 2) {
        document.querySelector("li:nth-of-type(1)").classList.remove("omgeslagen");
    }

    currentPanelIndex = (currentPanelIndex - 1 + panels.length) % panels.length;
    panels[currentPanelIndex].classList.add("hover");

    if (currentPanelIndex == 5) {
        document.querySelector("body").classList.remove("black")  
        document.querySelector("body").classList.remove("gray")  
        document.querySelector("body").classList.remove("pink")  
    }

    if (currentPanelIndex < 9) {
        document.querySelector("li:nth-of-type(2)").classList.remove("omgeslagen");
        document.querySelector("body").classList.remove("gray")  

        document.querySelector("body").classList.add("black")  
    }

    if (currentPanelIndex < 13) {
        document.querySelector("body").classList.remove("pink")  

        document.querySelector("body").classList.add("gray")  
    }

    
    if (currentPanelIndex < 16) {
        document.querySelector("li:nth-of-type(3)").classList.remove("omgeslagen");

        document.querySelector("body").classList.add("roze")  
    }
});

