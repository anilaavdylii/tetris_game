import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Tetris from './pages/tetris/Tetris';
import React, {useState, useEffect} from 'react';
import Finish from './pages/finish/Finish';

import { usePlayer } from './hooks/usePlayer';
import { useStage } from './hooks/useStage';
import { useGameStatus } from './hooks/useGameStatus';

function App() {
  const [username, setUsername] = useState("");
  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel, topScore, setTopScore] = useGameStatus(
    rowsCleared
  );


  useEffect(()=>{
    localStorage.setItem('Top Score', JSON.stringify(topScore)) ;
    localStorage.setItem('Username', JSON.stringify(username)) ;
  })

  return (
    <div className="App">
      <Routes >
        <Route path='/' 
          element={<Home username={username} setUsername={setUsername}/>} />
        <Route 
          path='/tetris' element={<Tetris 
                                      player={player} updatePlayerPos={updatePlayerPos} resetPlayer={resetPlayer} playerRotate={playerRotate} 
            stage={stage} setStage={setStage} rowsCleared={rowsCleared} score={score} setScore={setScore} rows={rows} level={level} setRows={setRows} setLevel={setLevel}
                                  />} />
        <Route 
          path='/finish' score={score} element={<Finish username={username} setUsername={setUsername}/>} />
      </Routes >
      
    </div>
  );
}

export default App;
