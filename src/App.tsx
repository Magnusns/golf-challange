import { useState } from 'react'
import './App.css'

const challenges = [
  "Spill hele hullet med 9er jern",
  "Alle spillere på laget får en mulligan på hullet",
  "Lander ballen utenfor Fairway vil laget få + 1 slag på totalt score",
  "Spill hele hullet med 5 wood",
  "Birdie teller som Eagle",
  "Utslag fra tee med buksene nede"
]

function App() {
  const [challenge, setChallenge] = useState(() => {
    return challenges[Math.floor(Math.random() * challenges.length)]
  })

  const getNewChallenge = () => {
    let newChallenge
    do {
      newChallenge = challenges[Math.floor(Math.random() * challenges.length)]
    } while (newChallenge === challenge)
    setChallenge(newChallenge)
  }

  return (
    <div className="app">
      <div className="container">
        <h1>Golf Utfordring! 🏌️‍♂️</h1>
        <div className="challenge-box">
          <p className="challenge-text">{challenge}</p>
        </div>
        <button onClick={getNewChallenge} className="refresh-btn">
          Ny Utfordring 🎯
        </button>
      </div>
    </div>
  )
}

export default App
