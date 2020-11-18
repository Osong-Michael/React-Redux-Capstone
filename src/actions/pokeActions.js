/* eslint linebreak-style: [2, "windows"] */
import {
  fetchPokemonsPending,
  fetchPokemonsSuccess,
  fetchPokemonsError,
  fetchOnePokemonSuccess,
} from './index';

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

function fetchPokemon(name) {
  return dispatch => {
    dispatch(fetchPokemonsPending());
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchOnePokemonSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(fetchPokemonsError(error));
      });
  };
}
export { fetchPokemon };
export default fetchPokemons;
