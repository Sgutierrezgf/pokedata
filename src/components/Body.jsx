import React, { useState, useEffect } from 'react';
import '../assets/styles/components/body.css';
import { getPokemon, getAllPokemon } from '../hooks/useInitialState';
import PokeItem from '../components/PokeItem';
import More from '../components/More'





function Body() {

  const [pokemonData, setPokemonData] = useState([])
  const [loading, setLoading] = useState(true);
  const [pokeSearch, setPokeSearch] =  useState('')
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  
  
  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(`https://pokeapi.co/api/v2/pokemon`)
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  useEffect(() => {
    setFilteredPokemon(
      pokemonData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(pokeSearch.toLowerCase())
      )
    );
  }, [pokeSearch, pokemonData]);
  
  
  
  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }
    return (
      <div className="Navbar">
      <input
          className='search'
          type="text"
          placeholder="Search Pokemon"
          onChange={(e) => setPokeSearch(e.target.value)}
        />
        <div>
          { loading ? <h1 style={ { textAlign: 'center' } }>Loading...</h1> : (
            <>
              <div className="grid-container">
                { filteredPokemon.map((pokemon, i) => {
                  return <PokeItem key={ i } pokemon={ pokemon } />
                })  }
              </div>
              <More />

            </> 
          ) }
        </div>
      </div>
    );
  };
  
  export default Body;