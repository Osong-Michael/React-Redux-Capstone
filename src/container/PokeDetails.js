/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CircleLoader } from 'react-spinners';
import details from '../css/Details.module.css';
import { fetchPokemon } from '../actions/index';
import { getOnePokemon, getPokemonPending } from '../reducers/pokeReducer';

class PokeDetails extends Component {
  componentDidMount() {
    const { fetchPokemon } = this.props;
    this.name = this.props.match.params.name;
    fetchPokemon(this.name);
  }

  render() {
    const poke = this.props.pokemon;
    const { loading } = this.props;
    return (
      <>
        {loading && (
          <div className={details.loading}>
            <CircleLoader loading={loading} />
          </div>
        )}
        <div className={details.container}>
          <div className={details.image}>
            <img src={poke.sprites && poke.sprites.other.dream_world.front_default} alt="pokemon_img" />
          </div>
          <p className={details.name}>
            NAME:
            <span>{poke.name}</span>
          </p>
          <div className={details.height}>
            HEIGHT:
            <span>{poke.height}</span>
          </div>
          <div className={details.abilities}>
            <p>
              ABILITY:
              <span>{poke.abilities && poke.abilities[0].ability.name}</span>
            </p>
          </div>
        </div>
        <div className={details.back}><Link to="/">All Pokemons</Link></div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  pokemon: getOnePokemon(state),
  loading: getPokemonPending(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPokemon,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PokeDetails);
