import React, { useState } from 'react'

function PokemonForm(){
  const [ pokemonData, setPokemonData ] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

  }

  return (
    <form className="pokemon-form" onSubmit={handleSubmit}>
      <input
        className="pokemon-input"
        type="text"
        name="pokemon"
        value={pokemonData}
        placeholder="Busca tu pokemon"
        //Actualizas el valor del input cunado el usuario teclea
        onChange={e => setPokemonData(e.target.value)}
        autoComplete="off"/>
      <input type="submit" className="pokemon-btn" value=""/>
    </form>
  )
}

export default PokemonForm