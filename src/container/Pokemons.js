/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Pokemon from '../components/Pokemon';
import app from '../css/App.module.css';

const apiUrl = 'https://pokeapi.co/api/v2/pokemon';
class Pokemons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
    };
  }

  componentDidMount() {
    this.getPoke();
  }

  getPoke() {
    fetch(apiUrl)
      .then(res => res.json())
      .then(resItems => {
        this.setState({
          pokemons: resItems.results,
        });
      });
  }

  handleClick(pokemon) {
    console.log(pokemon);
  }

  render() {
    const { pokemons } = this.state;
    return (
      <div className={app.pokeBody}>
        <Pokemon pokemons={pokemons} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Pokemons;
