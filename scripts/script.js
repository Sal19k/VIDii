console.log("Howdy!");

const next = document.getElementById("next");
const back = document.getElementById("back");

const spiderman = document.querySelector("img");
const tekst = document.querySelectorAll("a");

const panels = document.querySelectorAll("li section section")



let currentPanelIndex = -1;

var lis = document.querySelectorAll("li");

lis.forEach(li => {
	li.addEventListener("click", omslaan);
    

});

function omslaan(event) {
	var dePagina = event.target;
    console.log("Howdy!");
	
	dePagina.classList.toggle("omgeslagen");
}



next.addEventListener("click", () => {
    // Remove the 'hover' class from the current panel if it's not the initial panel
    if (currentPanelIndex !== -1) {
        panels[currentPanelIndex].classList.remove("hover");
    }
    console.log("currentPanelIndex =", currentPanelIndex);
    spiderman.classList.add("show");
    tekst[0].classList.add("show");

    // Increment the index and use the modulo operator to cycle through the panels
    currentPanelIndex = (currentPanelIndex + 1) % panels.length;

    // Add the 'hover' class to the new current panel
    panels[currentPanelIndex].classList.add("hover");

    // Add delay for the second 'a' element
    setTimeout(() => {
        tekst[1].classList.add("show");
    }, 1000); // 1000ms delay (1 second)
});

back.addEventListener("click", () => {
    if (currentPanelIndex !== -1) {
        panels[currentPanelIndex].classList.remove("hover");
    }

    currentPanelIndex = (currentPanelIndex - 1 + panels.length) % panels.length;
    panels[currentPanelIndex].classList.add("hover");   

    if (currentPanelIndex === 7) {
        panels[currentPanelIndex].classList.remove("hover");
        
    }
});