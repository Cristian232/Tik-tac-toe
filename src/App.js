import './App.css';
import Square from "./tictactoe-components/Square";
import {Game} from "./tictactoe-components/Game";
import {Alert} from "./tictactoe-components/Alert";
import {Modal} from "./tictactoe-components/Modal";

function App() {
  return (
    <div className="App">
      <Modal />
      <Game />
    </div>
  );
}

export default App;
