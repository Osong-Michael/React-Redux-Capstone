import pokeReducer from '../reducers/pokeReducer';

describe('jobs reducer', () => {
  it('should return the initial state', () => {
    expect(pokeReducer(undefined, {})).toEqual(
      {
        loading: false,
        pokemons: [],
        error: null,
        filter: '',
        pokemon: {},
      },
    );
  });

  it('should handle FETCHING_POKEMONS', () => {
    expect(
      pokeReducer([], {
        type: 'FETCHING_POKEMONS',
      }),
    ).toEqual(
      {
        loading: true,
      },
    );
  });

  it('should handle FETCHED_POKEMONS', () => {
    expect(
      pokeReducer([], {
        type: 'FETCHED_POKEMONS',
      }),
    ).toEqual(
      {
        loading: false,
      },
    );
  });

  it('should handle FETCH_POKEMON', () => {
    expect(
      pokeReducer([], {
        type: 'FETCH_POKEMON',
      }),
    ).toEqual(
      {
        loading: false,
      },
    );
  });
});
