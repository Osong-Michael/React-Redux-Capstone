import React from 'react';
import PropTypes from 'prop-types';
import app from '../css/App.module.css';
import Pokeball from '../img/pokeball.png';

const Pokemon = ({ pokemons }) => {
  const poke = pokemons.map(pokemon => (
    <div key={pokemon.id} className={app.poke}>
      <img src={Pokeball} alt="pokemon ball" />
      <p>{pokemon.name}</p>
    </div>
  ));

  return (
    <>
      {poke}
    </>
  );
};

Pokemon.propTypes = {

  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,

};

export default Pokemon;
