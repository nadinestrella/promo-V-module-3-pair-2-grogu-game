import Grogu from './Grogu';

function Board() {
  return (
    <div>
      <section className="board">
        <div className="cell">
          <Grogu />
        </div>

        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
      </section>
    </div>
  );
}

export default Board;
