function generatePoem(event) {
    event.preventDefault()

    new Typewriter('#poem', {
        strings: "An old silent pond, A frog jumps into the pond. Splash! Silence again." ,
        autoStart: true,
        delay: 1,
        cursor: "",
      });

}


let poemFormElment = document.querySelector("#poem-generator-form");
poemFormElment.addEventListener("submit", generatePoem);

