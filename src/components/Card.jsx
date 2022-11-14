import React from "react";

const Card = (props) => {
    const card = {
      minHeight: "580px",
      width: "550px",
      backdropFilter: "blur(5px)",
      padding: "5rem",
      paddingTop: "0px",
      borderRadius: "1rem",
      position: "relative",
      border: "0.3px solid #fff",
      margin: "8rem auto",
      overflow: "hidden",
      transition: "all 500ms",
      justifyContent: "center",
      alignItems: "center",
      display: "block"
    }

    return (
      <>
        <div style={card}>{props.children}</div>
      </>
    )
};



export default Card;