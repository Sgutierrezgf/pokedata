import React, { useState } from 'react';
import '../assets/styles/components/pokeitem.css';
import typeColors from '../hooks/TypeColors';
import { Modal } from 'antd';
import { Row, Col } from 'antd';


const PokeItem = ({ pokemon }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="site-card-border-less-wrapper sitecard">
            <div bordered={ false } onClick={ () => setVisible(true) } className="pokecard" >
                <div className="Card__img">
                    <img className='pokeimg' src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png` } alt="" />
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
            </div>
            <Modal
                title={ pokemon.name }
                centered
                visible={ visible }
                onOk={ () => setVisible(false) }
                onCancel={ () => setVisible(false) }
                width={ 500 }
            >
                <Row>
                    <Col span={ 12 }>
                        <img className='pokeimg' src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png` } alt="" />
                    </Col>
                    <Col span={ 12 }>
                        <ul className="pokemon-stats">
                            { pokemon.stats.map(item => (
                                <li className="pokemon-stat">
                                    <span className="stat-name"><b>{ item.stat.name }: </b></span>
                                    <span>{ item.base_stat }</span>
                                </li>
                            )) }
                        </ul>
                        
                    </Col>
                </Row>
                <Row>
                    <Col span={ 24 }>

                    </Col>
                </Row>
            </Modal>
        </div>
    );
};

export default PokeItem;