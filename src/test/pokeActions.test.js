import {
  fetchPokemonsPending,
  fetchPokemonsSuccess,
  fetchPokemonsError,
  filterPokemons,
  fetchOnePokemonSuccess,
}
  from '../actions/index';

describe('actions', () => {
  it('should create an action to start fetching Pokemons', () => {
    const expectedAction = {
      type: 'FETCHING_POKEMONS',
    };
    expect(fetchPokemonsPending()).toEqual(expectedAction);
  });

  it('should create an action for success fetching Pokemons', () => {
    const pokemons = [{ name: 'pikachu' }];
    const expectedAction = {
      type: 'FETCHED_POKEMONS',
      pokemons,
    };
    expect(fetchPokemonsSuccess(pokemons)).toEqual(expectedAction);
  });

  it('should create an action if fetching Pokemons fails', () => {
    const error = 'Failed to load Data...';
    const expectedAction = {
      type: 'FETCHING_POKEMONS_FAILED',
      error,
    };
    expect(fetchPokemonsError(error)).toEqual(expectedAction);
  });

  it('should create an action to filter through the Pokemons array', () => {
    const event = 'pikachu';
    const expectedAction = {
      type: 'CHANGE_FILTER',
      event,
    };
    expect(filterPokemons(event)).toEqual(expectedAction);
  });

  it('should create an action for success fetching Pokemons', () => {
    const pokemon = {};
    const expectedAction = {
      type: 'FETCH_POKEMON',
      pokemon,
    };
    expect(fetchOnePokemonSuccess(pokemon)).toEqual(expectedAction);
  });
});
