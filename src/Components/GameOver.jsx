const GameOver = ({
  score,
  setScore,
  setGameRunning,
  setTime,
  setIsRandomImage,
}) => (
  <div className="game-over-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
      alt="trophy"
      className="trophy"
    />
    <h1>YOUR SCORE</h1>
    <p>{score}</p>
    <button
      type="button"
      onClick={() => {
        setGameRunning(true)
        setIsRandomImage(true)
        setScore(0)
        setTime(60)
      }}
    >
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
        alt="reset"
        className="reset"
      />
      PLAY AGAIN
    </button>
  </div>
)

export default GameOver
