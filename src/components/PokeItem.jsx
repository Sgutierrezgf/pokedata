import React, { useState } from 'react';
import '../assets/styles/components/pokeitem.css';
import typeColors from '../hooks/TypeColors';
import {  Modal } from 'antd';
import { Row, Col } from 'antd';


const PokeItem = ({ pokemon }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="site-card-border-less-wrapper">
            <div bordered={ false }  onClick={ () => setVisible(true) } className="pokecard">
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
            </div>
            <Modal
                title={ pokemon.name }
                centered
                visible={ visible }
                onOk={ () => setVisible(false) }
                onCancel={ () => setVisible(false) }
                width={ 1000 }
            >
                <Row>
                    <Col span={ 12 }>
                        <img src={ pokemon.sprites.front_default } alt="" />
                    </Col>
                    <Col span={ 12 }>
                            <p className="title">Id : { pokemon.id }</p>
                            <p className="title">Weight : { pokemon.weight }</p>
                            <p className="title">Height : { pokemon.height }</p>
                            <p className="title">Ability : { pokemon.abilities[0].ability.name }</p>
                            <p className="title">habitat : { pokemon.habitat }</p>
                            <p className="title">Weight : { pokemon.weight }</p>
                            <p className="title">Height : { pokemon.height }</p>
                            <p className="title">Ability : { pokemon.abilities[0].ability.name }</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={ 24 }>col</Col>

                </Row>
            </Modal>
        </div>
    );
};

export default PokeItem;