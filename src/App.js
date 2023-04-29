import './App.css';
import {Game} from "./tictactoe-components/Game";
import {Modal} from "./tictactoe-components/Modal";
import {useState} from "react";

function App() {
    const [currentPlayer,setCurrentPlayer] = useState('');
    const [score, setScore] = useState(0);
    let getCurrentPlayer = (user) => {
        setCurrentPlayer(user);
    };
    let increaseScore = () => {
        setScore(score + 1);
    }
    return (
    <div className="App">
      <Modal currentP={getCurrentPlayer}/>
      <Game scoreBoard={increaseScore}/>
    </div>
  );
}

export default App;
