/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
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
    console.log(this.state);
  }

  render() {
    return (
      <div className={details.container}>
        <div>Image</div>
        <p>Name</p>
        <div>Height</div>
        <div>Abilities</div>
      </div>
    );
  }
}

export default PokeDetails;
