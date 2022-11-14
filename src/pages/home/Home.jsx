import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card'
import "./Home.css";
import { quotes } from "../../quotes"

import { usePlayer } from '../../hooks/usePlayer';
import { useStage } from '../../hooks/useStage';
import { useGameStatus } from '../../hooks/useGameStatus';

const Home = ({ username, setUsername }) => {
  const [player, resetPlayer] = usePlayer();
  const [rowsCleared] = useStage(player, resetPlayer);
  const [topScore] = useGameStatus(rowsCleared);

  const navigate = useNavigate();
  const [quote, setQuote] = useState([]);

  const fetchQuote = async () => {
    const randomNum = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomNum].quote);
  }


  useEffect(() => {
    fetchQuote();
  }, []);



  const handleClick = () => {
    if (username.trim().length > 3) {
      navigate("/tetris");

      console.log("username ok!");
    }
    else {
      console.log("username short!");
    }
  }
  return (
    <>
        <Card>
          <h1 className="header">Welcome to Tetris Game!</h1>
          <div className="quote-container">
            <p>{quote}</p>
          </div>

          <h3 className="primary_text">Please enter your username.</h3>
          <input
            type="text"
            placeholder="Username"
            className="username_input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
          />

          <button className="start_btn" onClick={handleClick}>
            Let's play
          </button>

          <p className="top_score">
            Top score: {topScore}
          </p>
        </Card>
    </>
  );
};

export default Home;