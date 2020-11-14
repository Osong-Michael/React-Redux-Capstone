/* eslint-disable import/prefer-default-export */
const initialState = {
  loading: false,
  pokemons: [],
  error: null,
  filter: '',
  pokemon: {},
};

const pokeReducer = (state = initialState, action) => {
  // const list = state.pokemons.length ? state : 'No pokemons';
  // console.log(action);
  // console.log('List', list);
  // console.log('State', state);
  switch (action.type) {
    case 'FETCHING_POKEMONS':
      return {
        ...state,
        loading: true,
      };
    case 'FETCHED_POKEMONS':
      return {
        ...state,
        loading: false,
        pokemons: action.pokemons,
      };
    case 'FETCHING_POKEMONS_FAILED':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case 'CHANGE_FILTER':
      return {
        ...state,
        filter: action.event,
      };
    case 'FETCH_POKEMON':
      return {
        ...state,
        pokemon: action.pokemon,
      };
    default:
      return state;
  }
};

export const getPokemon = state => state.pokemons;
export const getOnePokemon = state => state.pokemon;
export const getPokemonPending = state => state.loading;
export const getPokemonError = state => state.error;
export const filterPokemonsName = state => state.filter;

export default pokeReducer;
