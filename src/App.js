// import logo from './logo.svg';
import './App.scss';
import { Router, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Route path="/" element={<Layout />} />
    </Router>
   
  );
}

export default App;
