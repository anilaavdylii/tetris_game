import React from 'react';

const Display = ({ gameOver, text }) => {
  const display = {
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    margin: "0 0 70px 0",
    padding: "20px",
    border: "4px solid #333",
    minHeight: "20px",
    width: "100%",
    borderRadius: "20px",
    color: "white",
    background: "#000",
    fontFamily: "Pixel, Arial, Helvetica, sans-serif",
    fontSize: "0.8rem"
  }

  return(
    <div style={display}>{text}</div>
  );
};

export default Display;
