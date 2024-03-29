import { useState, useCallback, useEffect, useRef } from 'react';

import { TETROMINOS, randomTetromino } from '../tetrominos';
import { STAGE_WIDTH, checkCollision } from '../gameHelpers';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    tetroname: TETROMINOS[0].name,
    collided: false,
  });

  const [el, setEl] = useState({
    tetromino: TETROMINOS[0].shape,
    tetroname: TETROMINOS[0].name,
    tetrocolor: TETROMINOS[0].color,
    tetroimg: TETROMINOS[0].img
  });

  function rotate(matrix, dir) {
    const mtrx = matrix.map((_, index) => matrix.map(column => column[index]));
    if (dir > 0) return mtrx.map(row => row.reverse());
    return mtrx.reverse();
  }

  function playerRotate(stage, dir) {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

    const pos = clonedPlayer.pos.x;
    let offset = 1;
    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.tetromino[0].length) {
        rotate(clonedPlayer.tetromino, -dir);
        clonedPlayer.pos.x = pos;
        return;
      }
    }
    setPlayer(clonedPlayer);
  }

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer(prev => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

 

  const prevPlayer = useRef();
  const prevEl = useRef();

  useEffect(()=>{
    prevPlayer.current = player;
    prevEl.current = el;
  },[player, el]);


  const randArray = [];

  const randomTetro = () => {
    while (randArray.length <= 3){
      randArray.push(randomTetromino());
    }
    return randArray;
  }

  const resetPlayer = useCallback(() => {
    let array = randomTetro();
    const firstElement = array.shift();
    let next = array[0];
    setEl(next);
    setPlayer({
        pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
        tetromino: firstElement.shape,
        tetroname: firstElement.name,
        collided: false,
      });
  }, []);


  return [player, updatePlayerPos, resetPlayer, playerRotate, el];
};
