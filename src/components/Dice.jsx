import PropTypes from "prop-types";

function Dice({movements}) {
  return (
    <>
      <button className="dice" onClick={movements}>
        Lanzar Dado 🎲
      </button>
    </>
  )
}

Dice.propTypes = {
  movements: PropTypes.func
  
};
export default Dice;
