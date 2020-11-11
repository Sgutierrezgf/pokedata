import React from 'react';
import { Checkbox } from 'antd';
import 'antd/dist/antd.css';
import '../assets/styles/components/filter.css'
import { Radio } from 'antd';

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}


const pokeOptions = ['Bug', 'Psychic', 'Electric', 'Fighting'];
const pokeOptions3 = ['Water', 'Fairy', 'Ground', 'Sinister'];
const pokeOptions5 = ['Fire', 'Dragon', 'Ice', 'Steel'];
const pokeOptions7 = ['Flying', 'Plant', 'Rock', 'Poision'];
const pokeOptions9 = ['Normal', 'Ghost', 'Grass', 'Unknown'];

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
};
const Filter = () => {

  return (
    <div className='filter'>
    <div>
      <h1>Type:</h1>
      <Checkbox.Group options={ pokeOptions } onChange={ onChange } />
      <br />
      <br />
      <Checkbox.Group options={ pokeOptions3 } onChange={ onChange } />
      <br />
      <br />
      <Checkbox.Group options={ pokeOptions5 } onChange={ onChange } />
      <br />
      <br />
      <Checkbox.Group options={ pokeOptions7 } onChange={ onChange } />
      <br />
      <br />
      <Checkbox.Group options={ pokeOptions9 } onChange={ onChange } />
      <br />
      <br />
      </div>
      <div className='color'>
        <h1>Color:</h1>
        <div class="boton" style={{backgroundColor:'blue'}}></div>
        <div class="boton" style={{backgroundColor:'yellow'}}></div>
        <div class="boton" style={{backgroundColor:'red'}}></div>
        <div class="boton" style={{backgroundColor:'peru'}}></div>
        <div class="boton" style={{backgroundColor:'orange'}}></div>
        <br />
        <br />
        <div class="boton" style={{backgroundColor:'green'}}></div>
        <div class="boton" style={{backgroundColor:'violet'}}></div>
        <div class="boton" style={{backgroundColor:'white'}}></div>
        <div class="boton" style={{backgroundColor:'blueviolet'}}></div>
        <div class="boton" style={{backgroundColor:'black'}}></div>
      </div>
      <div>
        <h1>Gender:</h1>
        <Radio.Group className='radio' >
        <Radio style={radioStyle} value={1}>
          All
        </Radio>
        <Radio style={radioStyle} value={2}>
          Male
        </Radio>
        <Radio style={radioStyle} value={3}>
          Female
        </Radio>
        <Radio style={radioStyle} value={4}>
          Undefined
        </Radio>

      </Radio.Group>
      </div>
    </div>
  );
};

export default Filter;