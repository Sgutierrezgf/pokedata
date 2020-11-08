import React, { useState, useEffect } from 'react';
import '../assets/styles/container/App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Body from '../components/Body';
import Filter from '../components/Filter';
import { Row, Col } from 'antd';
import PokeItem from '../components/PokeItem';
import { getPokemon, getAllPokemon } from '../hooks/useInitialState';

function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL)
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])

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
    <BrowserRouter>
      <Layout>
        <Row>
          <Col span={ 18 } push={ 6 }>
            <Body />
            <div>
              { loading ? <h1 style={ { textAlign: 'center' } }>Loading...</h1> : (
                <>
                  <div className="btn">
                    <button onClick={ prev }>Prev</button>
                    <button onClick={ next }>Next</button>
                  </div>
                  <div className="grid-container">
                    { pokemonData.map((pokemon, i) => {
                      return <PokeItem key={ i } pokemon={ pokemon } />
                    }) }
                  </div>
                  <div className="btn">
                    <button onClick={ prev }>Prev</button>
                    <button onClick={ next }>Next</button>
                  </div>
                </>
              ) }
            </div>
          </Col>
          <Col span={ 6 } pull={ 18 }>
            <Filter />
          </Col>
        </Row>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
