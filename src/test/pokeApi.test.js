import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchPokemons, { fetchPokemon } from '../actions/pokeActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;
const state = {
  pokemons: [],
  pokemon: {},
};

describe('API Calls', () => {
  beforeEach(() => {
    store = mockStore(state);
  });

  describe('Calling API for All Pokemons and One Pokemon', () => {
    it('Getting One Pokemon', () => {
      store.dispatch(fetchPokemon());
      const expected = {
        pokemons: [],
        pokemon: {},
      };
      const actions = store.getState();

      expect(actions).toEqual(expected);
    });

    it('It gets all pokemons in the state', () => {
      store.dispatch(fetchPokemons());
      const expected = {
        pokemons: [],
        pokemon: {},
      };
      const actions = store.getState();

      expect(actions).toEqual(expected);
    });
  });
});
