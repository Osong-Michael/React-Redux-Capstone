/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CircleLoader } from 'react-spinners';
import details from '../css/Details.module.css';
import { fetchPokemon } from '../actions/pokeActions';
import { getOnePokemon, getPokemonPending } from '../reducers/pokeReducer';

class PokeDetails extends Component {
  componentDidMount() {
    const { fetchPokemon } = this.props;
    const name = this.props.match.params.name;
    fetchPokemon(name);
  }

  render() {
    const { pokemon, loading } = this.props;
    return (
      <>
        {loading && (
          <div className={details.loading}>
            <CircleLoader loading={loading} />
          </div>
        )}
        <div className={details.container}>
          <div className={details.image}>
            <img src={pokemon.sprites && pokemon.sprites.other.dream_world.front_default} alt="pokemon_img" />
          </div>
          <p className={details.name}>
            NAME:
            <span>{pokemon.name}</span>
          </p>
          <div className={details.height}>
            HEIGHT:
            <span>{pokemon.height}</span>
          </div>
          <div className={details.abilities}>
            <p>
              ABILITY:
              <span>{pokemon.abilities && pokemon.abilities[0].ability.name}</span>
            </p>
          </div>
        </div>
        <div className={details.back}><Link to="/">All Pokemons</Link></div>
      </>
    );
  }
}

PokeDetails.propTypes = {
  fetchPokemon: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  pokemon: getOnePokemon(state),
  loading: getPokemonPending(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPokemon,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PokeDetails);
