import React from 'react';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => {
  const cell = {
    width: "auto",
    background: `rgba(${TETROMINOS[type].color}, 0.7`,
    border: `${type === 0 ? '0.1px solid' : '2px solid'}`,
    borderBottomColor: `rgba(${TETROMINOS[type].color}, 0.4)`,
    borderRightColor: `rgba(${TETROMINOS[type].color}, 0.4)`,
    borderTopColor: `rgba(${TETROMINOS[type].color}, 0.4)`,
    borderLeftColor: `rgba(${TETROMINOS[type].color}, 0.4)`,
  }

  return(
    <div style={cell}>
  </div>
  );
};

export default React.memo(Cell);
