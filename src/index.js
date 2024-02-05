function generatePoem(event) {
    event.preventDefault()

    let poemConatiner =document.querySelector("#poem")
    poemConatiner. innerHTML = 
    "An old silent poond
    A frog jumps into the pond—
    Splash! Silence again.";
}


let poemFormElment = document.querySelector("#poem-generator-form");
poemFormElment.addEventListener("submit", generatePoem);