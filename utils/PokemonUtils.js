export const getAllPokemons = async () => {
  const apiCall = await fetch('https://pokeapi.co/api/v2/generation/1');
  const results = await apiCall.json();
  return results.pokemon_species;
};

export default getAllPokemons;
