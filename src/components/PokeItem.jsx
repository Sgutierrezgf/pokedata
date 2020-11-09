import React, { useState } from 'react';
import '../assets/styles/components/pokeitem.css';
import typeColors from '../hooks/TypeColors';
import { Card, Modal, Space } from 'antd';
import { Row, Col } from 'antd';

const CountryItem = ({ pokemon }) => {
    const [visible, setVisible] = useState(false);

    return (
        <Space className="site-card-border-less-wrapper">
            <Card bordered={ false } style={ { width: 300 } } onClick={ () => setVisible(true) }>
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
                            <p className="title">Weight : { pokemon.id }</p>
                            <p className="title">Ability : { pokemon.weight }</p>
                            <p className="title">Weight : { pokemon.height }</p>
                            <p className="title">Height : { pokemon.flavor_text_entries }</p>
                            <p className="title">Ability : { pokemon.genre }</p>
                            <p className="title">Weight : { pokemon.weight }</p>
                            <p className="title">Height : { pokemon.height }</p>
                            <p className="title">Ability : { pokemon.abilities[0].ability.name }</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={ 24 }>col</Col>

                </Row>
            </Modal>
        </Space>
    );
};

export default CountryItem;