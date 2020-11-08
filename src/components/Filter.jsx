import React from 'react';
import { Checkbox } from 'antd';

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

const pokeOptions = ['Bug', 'Psychic'];
const pokeOptions2 = ['Electric', 'Fighting'];
const pokeOptions3 = ['Water', 'Fairy'];
const pokeOptions4 = ['Ground', 'Sinister'];
const pokeOptions5 = ['Fire', 'Dragon'];
const pokeOptions6 = ['Ice', 'Steel'];
const pokeOptions7 = ['Flying', 'Plant'];
const pokeOptions8 = ['Rock', 'Poision'];
const pokeOptions9 = ['Normal', 'Ghost'];
const pokeOptions10 = ['Grass', 'Unknown'];


const Filter = () => {
  return (
    <div>
      <Checkbox.Group options={ pokeOptions } onChange={ onChange } />
      <br />
      <br />
      <Checkbox.Group options={ pokeOptions2 } onChange={ onChange } />
      <br />
      <br />
      <Checkbox.Group options={ pokeOptions3 } onChange={ onChange } />
      <br />
      <br />
      <Checkbox.Group options={ pokeOptions4 } onChange={ onChange } />
      <br />
      <br />
      <Checkbox.Group options={ pokeOptions5 } onChange={ onChange } />
      <br />
      <br />
      <Checkbox.Group options={ pokeOptions6 } onChange={ onChange } />
      <br />
      <br />
      <Checkbox.Group options={ pokeOptions7 } onChange={ onChange } />
      <br />
      <br />
      <Checkbox.Group options={ pokeOptions8 } onChange={ onChange } />
      <br />
      <br />
      <Checkbox.Group options={ pokeOptions9 } onChange={ onChange } />
      <br />
      <br />
      <Checkbox.Group options={ pokeOptions10 } onChange={ onChange } />
      <br />
      <br />
    </div>
  );
};

export default Filter;