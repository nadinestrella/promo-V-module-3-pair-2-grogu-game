// Fichero src/components/App.jsx
import { useState } from 'react';
import '../scss/App.scss';
import Header from './Header';
import Board from './Board';
import Dice from './Dice';
import GameStatus from './GameStatus';
import RestartButton from './RestartButton';

function App() {
  const [groguPosition, setGroguPosition] = useState(0);
  const [cookies, setCookies] = useState(['🍪', '🍪', '🍪']);
  const [frogs, setFrogs] = useState(['🐸', '🐸', '🐸']);
  const [eggs, setEggs] = useState(['🥚', '🥚', '🥚']);
  const [gameStatus, setGameStatus] = useState('');


  const restartGame = () => {
    setGroguPosition(0);
    setCookies(['🍪', '🍪', '🍪']);
    setFrogs(['🐸', '🐸', '🐸']);
    setEggs(['🥚', '🥚', '🥚']);
    setGameStatus('');
  }


  const playGame = () => {
    if (groguPosition > 5) {
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
      setGameStatus("¡Grogu avanza una casilla!")
      //playGame()
    } else if (randomNumber === 3) {
      const newEggs = eggs.slice(1);
      setEggs(newEggs);
      
      setGameStatus("¡Has entregado un huevo!")
      //playGame()
    } else if (randomNumber === 2) {
      const newFrogs = frogs.slice(1);
      setFrogs(newFrogs);
      
      setGameStatus("¡Has entregado una rana!")
      //playGame()
    } else if (randomNumber === 1) {
      const newCookies = cookies.slice(1);
      setCookies(newCookies);
      
      setGameStatus("¡Has entregado una galleta!")
      //playGame()
    }
    playGame()
  };

  return (
    <div className="page">
      <Header />
      <main className="page">
        <Board />
        <section>
          <Dice movements={movements}/>
          <GameStatus gameStatus={gameStatus}/>
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
          <RestartButton restartGame= {restartGame}/>
        </section>
      </main>
    </div>
  );
}

export default App;
