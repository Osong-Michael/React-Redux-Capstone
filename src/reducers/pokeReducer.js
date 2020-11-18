const initialState = {
  loading: false,
  pokemons: [],
  error: null,
  filter: '',
  pokemon: {},
};

const pokeReducer = (state = initialState, action) => {
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
        loading: false,
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
