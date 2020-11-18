import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { filterPokemons } from '../actions/index';
import details from '../css/Details.module.css';

const Filter = props => {
  const handleChange = e => {
    const { filterPokemons } = props;
    filterPokemons(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search Pokemon.."
        className={details.filter}
      />
    </div>
  );
};

Filter.propTypes = {
  filterPokemons: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  filterPokemons,
}, dispatch);

export default connect(null, mapDispatchToProps)(Filter);
