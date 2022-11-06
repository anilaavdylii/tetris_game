import React from 'react';

const Display = ({ gameOver, text }) => {
  const display = {
    display: "flex",
    margin: "0 50px 50px 0",
    padding: "10px",
    border: "4px",
    minHeight: "20px",
    width: "100%",
    borderRadius: "20px",
    color: "white",
    background: "transparent",
    fontFamily: "Pixel, Arial, Helvetica, sans-serif",
    fontSize: "0.8rem"
  }

  return(
    <div style={display}>{text}</div>
  );
};

export default Display;
