const button = document.getElementById("myButton");
button.addEventListener("click", function () {
  
  let input = document.getElementById("text").value;
  console.log(input, "inputtt");
  
  fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + input)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const word = document.getElementById("word");
      const displayBox = document.getElementById("displayBox");

      word.innerHTML = input;
      for (let element of data) {
        meanings_array = element.meanings;
        
        for (let meaning of meanings_array) {
          displayBox.innerHTML += `<h1>${meaning.partOfSpeech}</h1>`;
          definitions_array = meaning.definitions;
          
          for (let definition of definitions_array) {
            displayBox.innerHTML += `<ul><li>${definition.definition} </li></ul>`;
          }
        }
        displayBox.innerHTML += `<hr/>`;
      }
    });
});
