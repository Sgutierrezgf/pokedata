import React from 'react';
import '../assets/styles/container/App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Body from '../components/Body';
import Filter from '../components/Filter';
import { Row, Col } from 'antd';

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Row>
          <Col span={ 18 } push={ 6 }>
            <Body />
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
