import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Pokemons from '../container/Pokemons';
import Navbar from './Navbar';
import PokeDetails from '../container/PokeDetails';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Pokemons} />
      <Route path="/pokemons/:name" component={PokeDetails} />
    </BrowserRouter>
  );
}

export default App;
