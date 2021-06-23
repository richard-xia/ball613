import logo from './logo.svg';
import './App.css';

import Card from '../src/components/card';
import Loader from './components/loader';

function App() {
  return (
    <div className='App'>
      <Card />
      <Loader />
    </div>
  );
}

export default App;
