/* eslint-disable import/prefer-default-export */
const initialState = {
  loading: false,
  pokemons: [],
  error: null,
};

const pokeReducer = (state = initialState, action) => {
  // console.log(action);
  // console.log(state);
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
    default:
      return state;
  }
};

export const getPokemon = state => state.pokemons;
export const getPokemonPending = state => state.loading;
export const getPokemonError = state => state.error;

export default pokeReducer;
