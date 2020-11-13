import React from 'react';
import { Link } from 'react-router-dom';
import navbar from '../css/Navbar.module.css';

const Navbar = () => (
  <nav className={navbar.navbar}>
    <h1>MY POKE</h1>
    <div className={navbar.right}>
      <div><Link to="/">All Pokemons</Link></div>
      <div><Link to="/">Special Pokemons</Link></div>
    </div>
  </nav>
);

export default Navbar;
