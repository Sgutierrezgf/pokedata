import React from 'react';
import { Row, Col } from 'antd';

const PokeModal = ({ pokemon_species }) => {
  return (
    <div>
      <Row>
        <Col span={ 12 }>
        <div className="Card__info">
                <div className="Card__data Card__data--weight">
                    <p className="title">Weight</p>
                    <p>{pokemon_species.name}</p>
                </div>
                <div className="Card__data Card__data--weight">
                    <p className="title">Height</p>
                    <p>{pokemon_species.id.genera}</p>
                </div>
                <div className="Card__data Card__data--ability">
                    <p className="title">Ability</p>
                    <p>{pokemon_species.id.habitat}</p>
                </div>
            </div>
        </Col>
      </Row>
      <Row>
        <Col span={ 24 }>col</Col>
      </Row>
    </div>
  );
};

export default PokeModal;
