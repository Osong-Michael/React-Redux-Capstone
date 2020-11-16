function fetchPokemonsPending() {
  return {
    type: 'FETCHING_POKEMONS',
  };
}

function fetchPokemonsSuccess(pokemons) {
  return {
    type: 'FETCHED_POKEMONS',
    pokemons,
  };
}

function fetchPokemonsError(error) {
  return {
    type: 'FETCHING_POKEMONS_FAILED',
    error,
  };
}

function filterPokemons(event) {
  return {
    type: 'CHANGE_FILTER',
    event,
  };
}

function fetchOnePokemonSuccess(pokemon) {
  return {
    type: 'FETCH_POKEMON',
    pokemon,
  };
}

export {
  fetchPokemonsPending,
  fetchPokemonsSuccess,
  fetchPokemonsError,
  filterPokemons,
  fetchOnePokemonSuccess,
};
