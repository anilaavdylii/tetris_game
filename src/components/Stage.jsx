import React from 'react';
import Cell from './Cell';


const Stage = ({ stage }) => {
  const wrapper = {
    backgroundColor:"transparent",
    display: "grid",
    gridTemplateRows: `repeat(${stage.length}, calc(22vw/ ${stage[0].length}))`,
    gridTemplateColumns: ` repeat(${stage[0].length}, 1fr)`,
    gridGap: "1px",
    border: "1px solid",
    width: "100%",
    maxWidth: "40vw",
    background: "transparent" 
  }

  return(
  <div style={wrapper} >
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </div>
  );
};

export default Stage;
