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

// const apiUrl = 'https://pokeapi.co/api/v2/pokemon';
class PokeDetails extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //   };
  // }

  componentDidMount() {
    // this.getDetails();
    const { fetchPokemon } = this.props;
    this.name = this.props.match.params.name;
    fetchPokemon(this.name);
  }

  // getDetails() {
  //   this.name = this.props.match.params.name;
  //   fetch(`${apiUrl}/${this.name}`)
  //     .then(res => res.json())
  //     .then(resItems => {
  //       this.show(resItems);
  //     });
  // }

  // show(items) {
  //   this.itemx = items;
  //   // console.log(this.itemx);
  //   this.setState({
  //     ...this.itemx,
  //   });
  //   // console.log(this.state);
  // }

  render() {
    const poke = this.props.pokemon;
    const { loading } = this.props;
    // console.log('My Poke', poke);
    // console.log(poke.sprites && poke.sprites.other.dream_world.front_default);
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
