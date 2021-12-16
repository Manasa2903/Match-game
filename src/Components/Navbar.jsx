import {useEffect} from 'react'

const Navbar = ({score, time, setTime, setGameRunning}) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(time - 1)
    }, 1000)
    if (time === 0) {
      clearInterval(intervalId)
      setGameRunning(false)
      console.log('cleared')
    }
    return () => clearInterval(intervalId)
  }, [time, setTime, setGameRunning])

  return (
    <ul className="navbar">
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          className="logo"
          alt="website logo"
        />
      </li>

      <li className="game-controls">
        <div className="score-container">
          <p className="score-heading">Score:</p>
          <p className="score">{score}</p>
        </div>
        <div className="time-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
          <p className="time">{time} sec</p>
        </div>
      </li>
    </ul>
  )
}

export default Navbar
