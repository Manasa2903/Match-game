import {useState, useEffect} from 'react'

const Navbar = () => {
  const [time, setTime] = useState(60)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(time - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [time])

  return (
    <nav className="navbar">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          className="logo"
          alt="website logo"
        />
      </div>

      <div className="game-controls">
        <p className="score">Score : </p>
        <div className="time-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
          <p className="time">{time} sec</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
