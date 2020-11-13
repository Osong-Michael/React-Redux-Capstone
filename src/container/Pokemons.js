/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Pokemon from '../components/Pokemon';
import app from '../css/App.module.css';
import fetchPokemons from '../actions/index';
import { getPokemonError, getPokemon, getPokemonPending } from '../reducers/pokeReducer';

// const apiUrl = 'https://pokeapi.co/api/v2/pokemon';
class Pokemons extends Component {
  // constructor(props) {
  //   super(props);

  //   // this.state = {
  //   //   pokemons: [],
  //   // };
  // }

  componentDidMount() {
    // this.getPoke();
    // eslint-disable-next-line react/prop-types
    const { fetchPokemons } = this.props;
    fetchPokemons();
  }

  // getPoke() {
  //   fetch(apiUrl)
  //     .then(res => res.json())
  //     .then(resItems => {
  //       this.setState({
  //         pokemons: resItems.results,
  //       });
  //     });
  // }

  render() {
    // eslint-disable-next-line react/prop-types
    const { pokemons } = this.props;
    // eslint-disable-next-line react/prop-types
    // console.log(this.props.pokemons);
    return (
      <div className={app.pokeBody}>
        <Pokemon pokemons={pokemons} handleClick={this.handleClick} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: getPokemonError(state),
  pokemons: getPokemon(state),
  loading: getPokemonPending(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPokemons,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);
