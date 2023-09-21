const pokemonList = document.getElementById("pokemonList");
// Recupera os parâmetros da URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const urlAPI = `https://pokeapi.co/api/v2/pokemon/${id}`;

// Use os dados como necessário
console.log(`ID: ${id}`);
console.log(`url: ${urlAPI}`);

function convertPokemonToPage(pokemon) {
  return `
    <div class="pokemon ${
      pokemon.type
    } m-0 rounded-none flex items-center justify-evenly pb-72">
        <div class="flex items-center mb-8 space-x-3">
            <span class="text-4xl text-white">${pokemon.name}</span>
            <span class="text-xl text-white opacity-70">#${
              pokemon.number
            }</span>
        </div>
        <div class="detail">
            <ol class="types !space-x-3 flex">
                ${pokemon.types
                  .map(
                    (type) =>
                      `<li class="type ${type} !px-8 !text-xl">${type}</li>`
                  )
                  .join("")}
            </ol>
        </div>
        </div>
            <div class="absolute inset-x-0 mx-auto w-2/3 top-44 z-50 md:w-1/5">
                <img
                    src="${pokemon.photo}"
                    alt="${pokemon.name}"
                />
            </div>
        </div>
        <div
            class="absolute top-[24.5rem] w-screen bg-white h-12 rounded-t-full z-40 md:hidden"
        ></div>
        <div class="flex h-[48%] justify-center z-30">
            <ol
                class="block space-y-10 mt-14 md:flex md:flex-row md:space-y-0 md:space-x-16"
            >
                ${pokemon.moves
                  .map((move) => `<li class="text-2xl">${move}</li>`)
                  .join("")}
            </ol>
        </div>
      `;
}

function loadPokemonItens(url) {
  pokedexApi.getPokemons(url).then((pokemon) => {
    const newHtml = convertPokemonToPage(pokemon);
    console.log(newHtml);
    pokemonList.innerHTML = newHtml;
  });
}

loadPokemonItens(urlAPI);
