/**
 *
 */
export const getAllPokemons = async () => {
  const apiCall = await fetch('https://pokeapi.co/api/v2/generation/1');
  const results = await apiCall.json();
  return results.pokemon_species;
};

/**
 * Fetch a Pokemon based upon its given ID number.
 *
 * @param {String} id Pokemon ID
 */
export const fetchPokemon = async (id) => {
  const apiCall = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const results = await apiCall.json();
  const pokemonData = {
    id,
    name: results.name,
    picture: results.sprites.front_default,
  };

  return pokemonData;
};

/**
 * Returns curated data about pokemons list coming from the getAllPokemons function
 *
 * @param {Object} pokemonsList List of Pokemons as the getAllPokemons list should returns
 */
export const fetchPokemons = (pokemonsList) => {
  const pokemonIds = pokemonsList.map(p => p.url.split('/').slice(-2, -1)[0]);
  const matchs = Promise.all(pokemonIds.map(id => fetchPokemon(id)));
  return matchs;
};

export default getAllPokemons;
