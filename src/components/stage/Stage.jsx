import React from 'react';
import Cell from '../cell/Cell';


const Stage = ({ stage }) => {
  const wrapper = {
    // backgroundColor:"black",
    display:"grid",
    gridTemplateRows: `repeat(${stage.length}, calc(22vw/ ${stage[0].length}))`,
    gridTemplateColumns: ` repeat(${stage[0].length}, 2fr)`,
    gridGap: "1px",
    border: "1px solid white",
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
