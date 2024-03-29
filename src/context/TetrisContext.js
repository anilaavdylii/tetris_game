import { createContext, useState, useEffect } from "react";
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';

const TetrisContext = createContext();

function TetrisProvider({ children, Tetris }) {
  const [username, setUsername] = useState("");
  const [player, updatePlayerPos, resetPlayer, playerRotate, el] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel, topScore, setTopScore] = useGameStatus(
    rowsCleared
  );
  const [isPlaying, setIsPlaying] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    localStorage.setItem('Top Score', JSON.stringify(topScore));
    localStorage.setItem('Username', JSON.stringify(username));
  })

  return (
    <TetrisContext.Provider value={{
      player, updatePlayerPos, resetPlayer, playerRotate, stage, setStage,
      rowsCleared, score, setScore, rows, setRows, level, setLevel, topScore,
      setTopScore, username, setUsername, el,
      isPlaying, setIsPlaying, error, setError
    }}>
      {children}
    </TetrisContext.Provider>
  );
}

export { TetrisContext, TetrisProvider };