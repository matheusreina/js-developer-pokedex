const pokedexApi = {};

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokedex();
  pokemon.number = pokeDetail.id;
  pokemon.name = pokeDetail.name;

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  const [type] = types;

  pokemon.types = types;
  pokemon.type = type;

  const moves = pokeDetail.moves.map((moveSlot) => moveSlot.move.name);
  pokemon.moves = moves.slice(0, 4);

  pokemon.photo = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeDetail.id}.png`;

  return pokemon;
}

pokedexApi.getPokemonDetail = (pokemon) => {
  return fetch(url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon);
};

pokedexApi.getPokemons = (urlAPI) => {
  return fetch(urlAPI)
    .then((response) => response.json())
    .then((pokemon) => convertPokeApiDetailToPokemon(pokemon))
    .then((detailRequests) => {
      return new Promise((resolve, reject) => {
        resolve(detailRequests);
      });
    })
    .then((pokemonsDetails) => pokemonsDetails);
};
