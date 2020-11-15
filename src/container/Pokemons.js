/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CircleLoader } from 'react-spinners';
import Pokemon from '../components/Pokemon';
import app from '../css/App.module.css';
import fetchPokemons from '../actions/index';
import {
  getPokemonError, getPokemon, getPokemonPending, filterPokemonsName,
} from '../reducers/pokeReducer';

class Pokemons extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { fetchPokemons } = this.props;
    fetchPokemons();
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { pokemons, filter, loading } = this.props;
    // eslint-disable-next-line react/prop-types
    const filteredPokemons = filter ? pokemons.filter(item => (
      // eslint-disable-next-line react/prop-types
      item.name.toLowerCase().search(filter.toLowerCase()) !== -1
    )) : pokemons;
    // eslint-disable-next-line react/prop-types
    return (
      <>
        {loading && (
          <div className={app.loading}>
            <CircleLoader loading={loading} />
          </div>
        )}
        <div className={app.pokeBody}>
          <Pokemon pokemons={filteredPokemons} handleClick={this.handleClick} />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  error: getPokemonError(state),
  pokemons: getPokemon(state),
  loading: getPokemonPending(state),
  filter: filterPokemonsName(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPokemons,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);
