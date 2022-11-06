import React from 'react';


const StartButton = ({ callback }) => {
  const button = {
    boxSizing: "border-box",
    margin: "0 0 20px 0",
    padding: "20px",
    minHeight: "30px",
    width: "100%",
    borderRadius: "20px",
    border: "none",
    color: "white",
    background: "#333",
    fontFamily: "Pixel, Arial, Helvetica, sans-serif",
    fontSize: "1rem",
    outline: "none",
    cursor: "pointer"
  }
  return(
    <>
      <div style={button} onClick={callback}>Start Game</div>
    </>
  );
};

export default StartButton;
