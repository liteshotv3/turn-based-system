import './App.css';
// import Menu from './Menu';
import Gameboard from './Gameboard'
import { tokens, zones } from './config/marvelUnited.js'

// console.log({ zones })
function App() {
  return (
    <div className="">
      <Gameboard
        tokens={tokens}
        zones={zones}
      />
    </div>
  );
}

export default App;