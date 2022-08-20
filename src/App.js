import './App.css';
// import Menu from './Menu';
import Gameboard from './Gameboard'
import tokens from './config/marvelUnited.js'
import Debug from './Debug';

function App() {
  return (
    <div className="App">
      {/* <Menu /> */}
      <Debug>{tokens}</Debug>
      <Gameboard
        tokens={tokens}
      />
    </div>
  );
}

export default App;