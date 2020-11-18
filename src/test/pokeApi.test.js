/* eslint linebreak-style: [2, "windows"] */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchPokemons from '../actions/pokeActions';
import { fetchPokemonsPending } from '../actions/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;
const state = {
  pokemons: [],
};

describe('User Actions', () => {
  beforeEach(() => {
    store = mockStore(state);
  });

  describe('Getting all Pokemons', () => {
    it('It dispatches the fetching pokemons pending action', () => {
      fetchPokemons();
      store.dispatch(fetchPokemonsPending());
      const actions = store.getActions();

      expect(actions[0].type).toEqual('FETCHING_POKEMONS');
    });
  });
});
