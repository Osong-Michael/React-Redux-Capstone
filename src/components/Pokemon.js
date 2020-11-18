/* eslint linebreak-style: [2, "windows"] */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import app from '../css/App.module.css';
import Pokeball from '../img/pokeball.png';

const Pokemon = ({ pokemons }) => {
  const poke = pokemons.map(pokemon => (
    <div key={Math.random()} className={app.poke}>
      <p>{pokemon.name}</p>
      <img src={Pokeball} alt="pokemon ball" />
      <div className={app.pokeBtn}>
        <Link to={`/pokemons/${pokemon.name}`}>
          <button type="button">Open Pokemon</button>
        </Link>
      </div>
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
