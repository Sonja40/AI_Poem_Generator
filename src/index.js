function displayPoem(response) {

  console.log("poem generated");

  new Typewriter('#poem', {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}


function generatePoem(event) {
    event.preventDefault()

    let instrctionsInput = document.querySelector("#user-instructions");
    let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
    let prompt = `User instrustions: Generate short Haiku Poems about ${instrctionsInput.value}` ;
    let context = "You are a romatic Poem expert and love to write short Poems. Your mission is to generate a 2 line poem in basic HTML. Make sure to follow the User instructions.";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
    
    console.log("Generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiURL).then(displayPoem);

}

 
let poemFormElment = document.querySelector("#poem-generator-form");
poemFormElment.addEventListener("submit", generatePoem);



"An old silent pond, A frog jumps into the pond. Splash! Silence again." 