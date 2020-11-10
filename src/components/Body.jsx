import React, { useState, useEffect } from 'react';
import '../assets/styles/components/body.css';
import { getPokemon, getAllPokemon } from '../hooks/useInitialState';
import PokeItem from '../components/PokeItem';



function Body() {

  const [pokemonData, setPokemonData] = useState([])
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [pokeSearch, setPokeSearch] =  useState('')
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  
  
  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(`https://pokeapi.co/api/v2/pokemon/`)
      setNextUrl(response.next);
      setPrevUrl(response.previous);
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
  
  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }
  
  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }
  
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
              <div className="btn">
                <button onClick={ prev }>Prev</button>
                <button onClick={ next }>Next</button>
              </div>
            </> 
          ) }
        </div>
      </div>
    );
  };
  
  export default Body;