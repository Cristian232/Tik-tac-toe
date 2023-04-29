import './App.css';
import {Game} from "./tictactoe-components/Game";
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
