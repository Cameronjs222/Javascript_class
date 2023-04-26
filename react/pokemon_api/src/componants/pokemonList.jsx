import React, { useEffect, useState } from 'react'
import axios from 'axios';
function PokemonList() {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
      .then(response => {
        const pokemonList = response.data.results;
        const pokemonWithSprites = pokemonList.map(pokemon => {
          return axios.get(pokemon.url).then(response => response.data);
        });
        Promise.all(pokemonWithSprites).then(pokemonData => {
          console.log(pokemonData)
          const updatedPokemonList = pokemonData.map(pokemon => {
            return {
              name: pokemon.name,
              spriteUrl: pokemon.sprites.front_default
            };
          });
          setPokemon(updatedPokemonList);
          setLoading(false)
        });
      })
  }, [])
    return (
    <div className='container'>
      <h1 className='centerText'>Pokemon list</h1>
      <div className="container">
      {loading ? (
        <p className='centerText'>Loading...</p>
      ) : (
        pokemon.map((pokeData, index)=> (
          <div key={index} className='listOfPokemon'>
            <p>{index + 1}. {pokeData.name}</p>
            <img src={pokeData.spriteUrl} alt="" />
          </div>
        ))
      )}
      </div>
    </div>
  )
}

export default PokemonList