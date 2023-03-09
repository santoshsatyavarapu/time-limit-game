import './index.css'

const NavBar = paras => {
  const {score, timeLeft} = paras

  return (
    <ul className="navbar">
      <li className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </li>

      <li className={`scores-container `}>
        <p className="score">Score: </p>
        <p className="score">{score}</p>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
          <p className="score">{timeLeft} Sec</p>
        </div>
      </li>
    </ul>
  )
}

export default NavBar
