import logo from './btc.png';
import './App.css';
import {CoinList} from './components/coinList';

const App = ({}) => {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CoinList/>
      </header>

    </div>
  );
}

export default App;
