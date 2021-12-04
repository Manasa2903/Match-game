const gameOver = () => (
  <div className="game-over-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
      alt="trophy"
      className="trophy"
    />
    <h1>YOUR SCORE</h1>
    <p>0</p>
    <button type="button">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
        alt="reset"
        className="reset"
      />
      Play Again
    </button>
  </div>
)

export default gameOver
