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
    let apiKey = "8429fab9a373o690ete5fa53ee0a6e14";
    let prompt = `User instrustions: Generate short Haiku Poems about ${instrctionsInput.value}` ;
    let context = "You are a romatic Haiku Poem expert and love to write short Haiku Poems. Your mission is to generate a 2 line Haiku poem in basic HTML. Make sure to follow the User instrustions.";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
    
    console.log("Generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiURL).then(displayPoem);

}

 
let poemFormElment = document.querySelector("#poem-generator-form");
poemFormElment.addEventListener("submit", generatePoem);



//"An old silent pond, A frog jumps into the pond. Splash! Silence again." 