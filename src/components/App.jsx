// Fichero src/components/App.jsx
import { useState } from 'react';
import '../scss/App.scss';
import Header from './Header';
import Board from './Board';

function App() {
  const [groguPosition, setGroguPosition] = useState(0);
  const [cookies, setCookies] = useState(['🍪', '🍪', '🍪']);
  const [frogs, setFrogs] = useState(['🐸', '🐸', '🐸']);
  const [eggs, setEggs] = useState(['🥚', '🥚', '🥚']);
  const [gameStatus, setGameStatus] = useState('En curso');

  // crear funcion para el dado

  function handleRollDice() {
    const random = Math.ceil(Math.random() * 4);
    console.log(random);
    return random;
  }

  const movements = (event) => {
    const randomNumber = handleRollDice();
    if (randomNumber === 4) {
      setGroguPosition(groguPosition + 1);
    } else if (randomNumber === 3) {
      const newEggs = eggs.slice(1);
      console.log(newEggs);
      setEggs(newEggs);
    } else if (randomNumber === 2) {
      const newFrogs = frogs.slice(1);
      setFrogs(newFrogs);
    } else if (randomNumber === 1) {
      const newCookies = cookies.slice(1);
      setCookies(newCookies);
    }
  };

  return (
    <div className="page">
      <Header />
      <main className="page">
        <Board />
        <section>
          <button className="dice" onClick={movements}>
            Lanzar Dado
          </button>
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
