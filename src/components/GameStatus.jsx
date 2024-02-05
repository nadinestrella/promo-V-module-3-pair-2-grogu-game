import PropTypes from "prop-types";

function GameStatus({gameStatus}) {
  return (
    <div className="game-status">{gameStatus}</div>
  )
}
GameStatus.propTypes = {
  playGame: PropTypes.string
}

export default GameStatus