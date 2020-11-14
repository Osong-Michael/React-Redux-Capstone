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

export {
  fetchPokemonsPending, fetchPokemonsSuccess, fetchPokemonsError, filterPokemons,
};
