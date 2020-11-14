import { fetchPokemonsPending, fetchPokemonsSuccess, fetchPokemonsError } from './pokeActions';

function fetchPokemons() {
  return dispatch => {
    dispatch(fetchPokemonsPending());
    fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=30')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchPokemonsSuccess(res.results));
        return res.results;
      })
      .catch(error => {
        dispatch(fetchPokemonsError(error));
      });
  };
}

export default fetchPokemons;
