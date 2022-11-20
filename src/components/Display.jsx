import React from 'react';

const Display = ({ text }) => {
  const display = {
    display: "flex",
    margin: "0 50px 0px 0",
    padding: "10px",
    border: "4px",
    minHeight: "20px",
    width: "100%",
    borderRadius: "5px",
    color: "white",
    background: "transparent",
    fontFamily: "Oswald",
    fontSize: "1.5rem",
    backgroundColor:"gray",
    justifyContent:"center"

  }

  return(
    <div style={display}>{text}</div>
  );
};

export default Display;
