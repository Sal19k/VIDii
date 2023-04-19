console.log("Howdy!");

const button = document.getElementById("button");
const papier = document.querySelector(".papier");

papier.addEventListener("click", () => {
    papier.classList.add("transform");
});

