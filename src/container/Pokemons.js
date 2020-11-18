import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CircleLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import Pokemon from '../components/Pokemon';
import app from '../css/App.module.css';
import fetchPokemons from '../actions/pokeActions';
import {
  getPokemonError, getPokemon, getPokemonPending, filterPokemonsName,
} from '../reducers/pokeReducer';

class Pokemons extends Component {
  componentDidMount() {
    const { fetchPokemons } = this.props;
    fetchPokemons();
  }

  render() {
    const { pokemons, filter, loading } = this.props;
    const filteredPokemons = filter ? pokemons.filter(item => (
      item.name.toLowerCase().search(filter.toLowerCase()) !== -1
    )) : pokemons;
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

Pokemons.propTypes = {
  fetchPokemons: PropTypes.func.isRequired,
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

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
