import React from 'react';
import { TETROMINOS } from '../../tetrominos';


// React.memo makes sure we only re-render the changed cells
const Cell = ({ type }) => {
  const cell = {
    width: "auto",
    background: `rgba(${type => type.color}, 0.8)`,
    border: `${type === 0 ? '0px solid' : '4px solid'}`,
    borderBottomColor: `rgba(${TETROMINOS[type].color}, 0.6)`,
    borderRightColor: `rgba(${TETROMINOS[type].color}, 3)`,
    borderTopColor: `rgba(${TETROMINOS[type].color}, 5)`,
    borderLeftColor: `rgba(${TETROMINOS[type].color}, 0.9)`,

  }

  return(
    <div style={cell}>
    {console.log('rerender cell')}
  </div>
  );
};

export default React.memo(Cell);
