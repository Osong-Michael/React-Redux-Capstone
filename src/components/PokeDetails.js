/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import details from '../css/Details.module.css';

const apiUrl = 'https://pokeapi.co/api/v2/pokemon';
class PokeDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    this.getDetails();
  }

  getDetails() {
    this.name = this.props.match.params.name;
    fetch(`${apiUrl}/${this.name}`)
      .then(res => res.json())
      .then(resItems => {
        this.show(resItems);
      });
  }

  show(items) {
    this.itemx = items;
    // console.log(this.itemx);
    this.setState({
      ...this.itemx,
    });
    // console.log(this.state);
  }

  render() {
    const poke = this.state;
    // console.log(poke.sprites && poke.sprites.other.dream_world.front_default);
    return (
      <>
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

export default PokeDetails;
