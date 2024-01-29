// Fichero src/components/App.jsxx
import { useState } from 'react';
import '../scss/App.scss';

function App() {
 const [groguPosition,setGroguPosition]= useState (0);
 const [cookies,setCookies]= useState (["🍪","🍪","🍪"]);
 const [frogs,setFrogs]= useState (["🐸","🐸","🐸"]);
 const [eggs,setEggs]= useState (["🥚","🥚","🥚"]);
 const [dice,setDice]= useState ([1,2,3,4]);
 
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
          <div className="cell" id="1"></div>
          <div className="cell" id="2"></div>
          <div className="cell" id="3"></div>
          <div className="cell" id="4"></div>
          <div className="cell" id="5"></div>
          <div className="cell" id="6"></div>
        </section>

        <section>
          <button className="dice">Lanzar Dado</button>
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
