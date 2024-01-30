// Fichero src/components/App.jsx
import { useState } from 'react';
import '../scss/App.scss';

function App() {
  const [groguPosition, setGroguPosition]= useState (0);
  const [cookies, setCookies]= useState (["🍪","🍪","🍪"]);
  const [frogs, setFrogs]= useState (["🐸","🐸","🐸"]);
  const [eggs, setEggs]= useState (["🥚","🥚","🥚"]);
  const [gameStatus, setGameStatus] = useState('En curso');

// crear funcion para el dado 

function handleRollDice() {
  const random = Math.ceil(Math.random()*4);
  console.log(random);
    return random;
    }

const movements = (event) => {
  const randomNumber = handleRollDice();
  if (randomNumber === 4) {
    setGroguPosition(+1)
  } else if (randomNumber === 3) {
    const newEggs = eggs.splice(0, 1)
    setEggs(newEggs)
  } else if (randomNumber === 2) {
    const newFrogs = frogs.splice(0, 1)
    setFrogs(newFrogs)
  } else if (randomNumber === 1) {
    const newCookies = cookies.splice(0, 1)
    setCookies(newCookies)
  }
console.log(newEggs);
}
  

  
  

  return (
    <div className="page">
      <header>
        <h1>¡Cuidado con Grogu!</h1>
      </header>
      <main className="page">
        <section className="board">
          <div className="cell" id="0">
            <div className="grogu">👣</div>
          </div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
        </section>

        <section>
          <button className="dice" onClick={movements}>Lanzar Dado</button>
          <div className="game-status">En curso</div>
        </section>

        <section className="goods-container">
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
        </section>
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </div>
  );
}

export default App;
