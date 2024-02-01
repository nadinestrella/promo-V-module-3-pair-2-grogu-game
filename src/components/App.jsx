// Fichero src/components/App.jsx
import { useState } from 'react';
import '../scss/App.scss';
import Header from './Header';
import Board from './Board';
import Dice from './Dice';
import GameStatus from './GameStatus';

function App() {
  const [groguPosition, setGroguPosition] = useState(0);
  const [cookies, setCookies] = useState(['🍪', '🍪', '🍪']);
  const [frogs, setFrogs] = useState(['🐸', '🐸', '🐸']);
  const [eggs, setEggs] = useState(['🥚', '🥚', '🥚']);
  const [gameStatus, setGameStatus] = useState('');


  const playGame = () => {
    if (groguPosition >= 6) {
      setGameStatus("¡Has perdido!")
    } else if (cookies.length === 0 && frogs.length === 0 && eggs.length === 0 && groguPosition < 6) {
      setGameStatus("¡Has ganado!")
    }
  }

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
      playGame()
      setGameStatus("¡Grogu avanza una casilla!")
    } else if (randomNumber === 3) {
      const newEggs = eggs.slice(1);
      setEggs(newEggs);
      playGame()
      setGameStatus("¡Has entregado un huevo")
    } else if (randomNumber === 2) {
      const newFrogs = frogs.slice(1);
      setFrogs(newFrogs);
      playGame()
      setGameStatus("¡Has entregado una rana")
    } else if (randomNumber === 1) {
      const newCookies = cookies.slice(1);
      setCookies(newCookies);
      playGame()
      setGameStatus("¡Has entregado una galleta")
    }
  };

  return (
    <div className="page">
      <Header />
      <main className="page">
        <Board />
        <section>
          <Dice movements={movements}/>
          <GameStatus playGame={playGame}/>
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
