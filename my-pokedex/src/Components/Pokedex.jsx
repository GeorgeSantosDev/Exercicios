import React, { Component } from 'react';
import pokemons from '../data';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    return (
      <section className='Pokedex-Container'>
        <h1><strong>Pokedex</strong></h1>
        <div className='Pokemons-Container'>
          {pokemons.map((pokemon) => <Pokemon key={pokemon.id} infos={pokemon} />)}
        </div>
      </section>
    )
  }
}

export default Pokedex