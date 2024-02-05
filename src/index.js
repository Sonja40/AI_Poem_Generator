function generatePoem(event) {
    event.preventDefault()

    alert("Generating Poem")
}


let poemFormElment = document.querySelector("#poem-generator-form");
poemFormElment.addEventListener("submit", generatePoem);