import React from 'react';
import '../assets/styles/components/pokeitem.css';
import typeColors from '../hooks/TypeColors';
import { Card } from 'antd';


const CountryItem = ({ pokemon }) => {
    return (
        <div className="site-card-border-less-wrapper">
            <Card  bordered={ false } style={ { width: 300 } }>
            <div className="Card__img">
                <img src={ pokemon.sprites.front_default } alt="" />
            </div>
            <div className="Card__name">
                { pokemon.name }
            </div>
            <div className="Card__types">
                {
                    pokemon.types.map(type => {
                        return (
                            <div className="Card__type" style={ { backgroundColor: typeColors[type.type.name] } }>
                                {type.type.name }
                            </div>
                        )
                    })
                }
            </div>
            </Card>
        </div>
    );
};

export default CountryItem;