import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = ({ pokemons }) => {
  const poke = pokemons.map(pokemon => (
    <div key={pokemon.id}>{pokemon.name}</div>
  ));

  return (
    <div>
      {poke}
    </div>
  );
};

Pokemon.propTypes = {

  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,

};

export default Pokemon;
