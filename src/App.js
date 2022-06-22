// import logo from './logo.svg';
import './App.scss';
import { Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/" element={<Layout />} />
    </Router>
   
  );
}

export default App;
