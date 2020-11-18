import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import Filter from '../container/Filter';

const state = {
  pokemons: [{ name: 'metapod' }],
  pokemon: {},
};
const mockStore = configureMockStore(state);

describe('Should Render Filter Component Properly', () => {
  describe('Rendering Filter component', () => {
    const store = mockStore();
    const component = renderer.create(<Provider store={store}><Filter /></Provider>);
    it('should render Filter component', () => {
      expect(component.toJSON).toMatchSnapshot();
    });
  });
});
