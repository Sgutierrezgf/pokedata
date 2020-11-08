import React from 'react';
import '../assets/styles/components/header.css'
import { Input } from 'antd';


const { Search } = Input;

const onSearch = value => console.log(value);

const Header = () => {
  return (
    <header className='header'>
        <h1>Pokemon</h1>
        <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
    </header>
  );
};

export default Header;