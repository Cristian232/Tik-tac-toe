import './App.css';
import {Game} from "./tictactoe-components/Game";
import {Modal} from "./tictactoe-components/Modal";
import {useCallback, useEffect, useState} from "react";
import getScore from "./tictactoe-components/getScore";

function App() {
    const [currentPlayer,setCurrentPlayer] = useState('');
    const [score, setScore] = useState(0);
    const getCurrentPlayer = useCallback((user) => {
        setCurrentPlayer(user);
        setScore(getScore(user));
    }, []);

    const increaseScore = useCallback(() => {
        // setScore(parseInt(score) + 1);
        // setCookie(currentPlayer);
    },[]);

    useEffect(() => {
        if(currentPlayer.length > 0){
            console.log("currentPlayer: " + currentPlayer);
            console.log("currentScore: " + score);
        }
    });

    return (
    <div className="App">
      <Modal currentP={getCurrentPlayer}/>
      <Game scoreBoard={increaseScore}/>
    </div>
  );

    function setCookie(name){
        let value = score;
        const date = new Date();
        date.setTime(date.getTime() + (0.5 * 24 * 60 * 60 * 1000))
        let expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    }
}

export default App;
