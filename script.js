const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const searchField = document.getElementById("inp-word");
const searchBtn = document.getElementById("search-btn");
const result = document.getElementById("result");
const sound = document.getElementById("sound");

searchBtn.addEventListener("click", () => {
  let inpWord = searchField.value;
  console.log(inpWord);
  fetch(`${url}${inpWord}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `
      <div class="word">
          <h3>${inpWord}</h3>
          <button onclick="playSound()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#6f6870"
              viewBox="0 0 256 256"
            >
              <path
                d="M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55Zm54-106.08a40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.58,24,24,0,0,0,0-31.72,8,8,0,0,1,12-10.58ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="details">
          <p>${data[0].meanings[0].partOfSpeech}</p>
          <p>${data[0].phonetic}</p>
        </div>
        <p class="word-meaning">
        ${data[0].meanings[0].definitions[0].definition}
        </p>  
        <p class="word-example">
        ${data[0].meanings[0].definitions[0].example || ""}
        </p>`;
        sound.setAttribute("src", `${data[0].phonetics[0].audio}`)
    });
});

// play word pronunciation

function playSound () {
    sound.play();
}
