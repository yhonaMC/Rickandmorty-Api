const Url = "https://rickandmortyapi.com/api/character/";

const formulario = document.getElementById("form");
const main = document.getElementById("main");
const search = document.getElementById("search");

const getHeroes = (Url) => {
  fetch(Url)
    .then((respose) => respose.json())
    .then((data) => viewCharacters(data.results));
};

getHeroes(Url);

function viewCharacters(characters) {
  main.innerHTML = "";

  characters.map((character) => {
    const { name, status, image, origin = { name } } = character;

    const characterElemet = document.createElement("div");
    characterElemet.classList.add("character");

    characterElemet.innerHTML = `
    <img src="${image}" alt="">
    <div class="card-info">
        <h3 class="title">${name}</h3>
        <span class="status">
        <span class="status-icon"></span>
        ${status}-Human
        </span>
    </div>
    <div class="origen">
        <h3 class="title">Origen</h3>
        <span>${origin.name}</span>    
    </div>
`;
    main.appendChild(characterElemet);
  });
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
});
