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
    let context = "You are a Haiku expert and love to write short Haikus. Your mission is to generate a 4 line Haiku in basic HTML and seperate each line with a HTML <br/>. Don't add a break at the end of the last line. Don't write the first letter of each line in uppercase, but write the first letter of the first word of the haiku in uppercase. Add a title inside a <h3> element saying `Your Haiku for ${prompt}`. Make sure to follow the user instructions";
    let prompt = `User instrustions are: Generate short Haiku about ${instrctionsInput.value}` ;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    let haikuElement = document.querySelector("#poem");
    haikuElement.classList.remove("hidden");
    haikuElement.innerHTML = `<div class="generating">⏳Generating a Haiku about ${instrctionsInput.value}</div>`;


    axios.get(apiURL).then(displayPoem);

}

 
let poemFormElment = document.querySelector("#poem-generator-form");
poemFormElment.addEventListener("submit", generatePoem);



//"An old silent pond, A frog jumps into the pond. Splash! Silence again." 