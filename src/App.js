import { useState } from 'react'
import './App.css'
import { Game } from './tictactoe-components/Game'
import fetchScoreFromCookie from './tictactoe-components/getScore'
import { Modal } from './tictactoe-components/Modal'

function App() {
    const [currentPlayer, setCurrentPlayer] = useState('')
    const [score, setScore] = useState(0)

    return (
        <div className="App">
            <Modal
                currentP={(user) => {
                    setCurrentPlayer(user)
                    setScore(fetchScoreFromCookie(user))
                }}
            />
            <Game
                scoreBoard={() => {
                    setScore(parseInt(score) + 1)
                    setCookie(currentPlayer)
                }}
            />
        </div>
    )

    function setCookie(name) {
        let value = parseInt(score) + 1
        const date = new Date()
        date.setTime(date.getTime() + 0.5 * 24 * 60 * 60 * 1000)
        let expires = 'expires=' + date.toUTCString()
        document.cookie = `${name}=${value}; ${expires}; path=/`
    }
}

export default App
