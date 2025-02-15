import { useState } from 'react'
import './App.css'

const challenges = [
  "Spill hele hullet med 9er jern",
  "Alle spillere på laget får en mulligan på hullet",
  "Lander ballen utenfor Fairway vil laget få + 1 slag på totalt score",
  "Spill hele hullet med 5 wood",
  "Oppgrader birdie til eagle på dette hullet",
  "Utslag fra tee med buksene nede",
  "Spill hele hullet med kun 2 køller",
  "Spill hele hullet med kun 7er jern",
  "Bogey blir dobbell bogey",
  "Spill hele hullet uten å snakke, snakker du får lage + 1 slag"
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
        <h1>UTFORDRING</h1>
        <div className="challenge-box">
          <div className="challenge-text">{challenge}</div>
        </div>
        <button onClick={getNewChallenge} className="refresh-btn">
          NESTE UTFORDRING
        </button>
      </div>
    </div>
  )
}

export default App
