import '../assets/styles/container/App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Body from '../components/Body';
import Filter from '../components/Filter';

function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Filter/>
      <Body/>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
