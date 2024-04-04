









const button = document.getElementById("myButton");
button.addEventListener("click", function () {
  alert("Button clicked!!!");
  let input = document.getElementById("text").value;
  console.log(input, "inputtt");
  fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + input)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const wordElement = document.getElementById("word");
      const displayDataElement = document.getElementById("displayData");
      // Clear previous content
      wordElement.innerHTML = '';
      displayDataElement.innerHTML = '';

      // Check if data is available
      if (Array.isArray(data) && data.length > 0) {
        const word = data[0].word;
        wordElement.innerHTML = word;

        // Loop through meanings
        data.forEach((element) => {
          const meaningsarray = element.meanings;
          meaningsarray.forEach((meaning) => {
            const partOfSpeech = meaning.partOfSpeech;
            const definitionList = document.createElement('ul');

            // Add part of speech heading
            const partOfSpeechHeading = document.createElement('h1');
            partOfSpeechHeading.textContent = partOfSpeech;
            displayDataElement.appendChild(partOfSpeechHeading);

            // Loop through definitions
            meaning.definitions.forEach((def) => {
              const definitionItem = document.createElement('li');
              definitionItem.textContent = def.definition;
              definitionList.appendChild(definitionItem);
            });

            displayDataElement.appendChild(definitionList);
          });
        });
      } 
    })
});
