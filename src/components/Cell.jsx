import React from 'react';
import { TETROMINOS } from '../tetrominos';


// React.memo makes sure we only re-render the changed cells
const Cell = ({ type }) => {
  const cell = {
    width: "auto",
    background: `rgba(${TETROMINOS[type].color}, 0.7`,
    border: `${type === 0 ? '1px solid' : '14px solid'}`,
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
