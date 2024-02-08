function displayPoem(response) {
  new Typewriter('#poem', {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}


function generatePoem(event) {
    event.preventDefault()

    let apiKey = "8429fab9a373o690ete5fa53ee0a6e14";
    let apiPrompt = "Tell me a short nice Poem";
    let apiContext = "";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
    
    console.log("generating poem")

    axios.get(apiURL).then(displayPoem);




}

 
let poemFormElment = document.querySelector("#poem-generator-form");
poemFormElment.addEventListener("submit", generatePoem);



"An old silent pond, A frog jumps into the pond. Splash! Silence again." 