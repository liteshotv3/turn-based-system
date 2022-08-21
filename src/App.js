import './App.css';
// import Menu from './Menu';
import Gameboard from './Gameboard'
import { tokens, zones } from './config/marvelUnited.js'
import Debug from './Debug';

function App() {
  return (
    <div className="App">
      {/* <Menu /> */}
      <Debug>{tokens}</Debug>
      <Gameboard
        tokens={tokens}
        zones={zones}
      />
    </div>
  );
}

export default App;