import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    const pokemon = this.props.infos
    return (
      <div className='Pokemon-Container'>
        <div>
          <p>{pokemon.name}</p>
          <p>{pokemon.type}</p>
          <p>AverageWeight: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
        </div>
        <div>
          <img src={pokemon.image} alt="Pokemon" />
        </div>
      </div>
    )
  }
}

export default Pokemon