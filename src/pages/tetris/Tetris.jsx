import React, { useState, useContext, useEffect, useRef } from 'react';
import { createStage, checkCollision } from '../../gameHelpers';
import {useNavigate} from 'react-router-dom';
import { useInterval } from '../../hooks/useInterval';
import Stage from '../../components/Stage';
import Display from '../../components/Display';
import CountDownTimer from '../../components/CountDownTimer';
import { TetrisContext } from '../../context/TetrisContext';

import './Tetris.css';

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const inputRef = useRef(null);

  const {player, updatePlayerPos, resetPlayer, playerRotate, stage, setStage, score, setScore, rows, setRows, level, setLevel } = useContext(TetrisContext);

  const navigate = useNavigate();


  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      // Activate the interval again when user releases down arrow.
      if (keyCode === 40) {
        setDropTime(1000 / (level + 1));
      }
    }
  };


  const drop = () => {
    // Increase level when player has cleared 10 rows
    if (rows > (level + 1) * 10) {
      setLevel(prev => prev + 1);
      // Also increase speed
      setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // Game over!
      if (player.pos.y < 1) {
        console.log('GAME OVER!!!');
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    // We don't need to run the interval when we use the arrow down to
    // move the tetromino downwards. So deactivate it for now.
    setDropTime(null);
    drop();
  };

  // This one starts the game
  // Custom hook by Dan Abramov
  useInterval(() => {
    drop();
  }, dropTime);

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };


  
  let onTimesup = () => {
      setStage(createStage());
      setDropTime(1000);
      resetPlayer();
      setScore(0);
      setLevel(0);
      setRows(0);
      setGameOver(false);
  }

  const keys = Object.keys(player);

  useEffect(()=>{
    if(gameOver){
       navigate('/finish')
    }
    inputRef.current.focus();
  })


  return(
      <div className='tetrisWrapper'
        role="button"
        tabIndex="0"
        onKeyDown={e => move(e)}
        onKeyUp={keyUp}
        ref={inputRef}
      >
        <div className='tetris'>
           <aside>
              <div>
                <p className='text'>Score:</p><Display text={` ${score}`} />
                <p className='text'>Level:</p><Display text={` ${level}`} />
                <p className='text'>Rows:</p><Display text={` ${rows}`} />
              </div>
            <CountDownTimer
              onTimesup={onTimesup}
              seconds={3}
            />
            <div className="helo">   
              {player[keys[2]]}
            </div>
            <div>
            </div>
          </aside>
          <Stage stage={stage} />
        </div>
        
      </div>
  );
};

export default Tetris;