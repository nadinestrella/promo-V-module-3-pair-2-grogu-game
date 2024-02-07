import PropTypes from 'prop-types';

function Dice({ movements, end }) {
  return (
    <>
      <button className={`dice ${end}`} onClick={movements}>
        Lanzar Dado 🎲
      </button>
    </>
  );
}

Dice.propTypes = {
  movements: PropTypes.func,
};
export default Dice;
