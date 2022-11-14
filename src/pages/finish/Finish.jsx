import React from 'react';
import Card from '../../components/Card';
import "./Finish.css";
import { useNavigate } from 'react-router-dom';

import { usePlayer } from '../../hooks/usePlayer';
import { useStage } from '../../hooks/useStage';
import { useGameStatus } from '../../hooks/useGameStatus';

const Finish = ({username, setUsername}) => {

  const [player, resetPlayer] = usePlayer();
  const [rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, topScore, setTopScore] = useGameStatus(rowsCleared);

    const navigate = useNavigate();

    const handleClick = () => {
        if (score > topScore) {
            setTopScore(score);
        }
        navigate('/tetris');
        setScore(0);
    };


    const quitGame = () => {
        if (score > topScore) {
            setTopScore(score);
        }
        navigate('/');
        setUsername("");
        setScore(0);
    };
    

  return (
    <>
        <Card>
            <h1 className="heading">You reached the end of the game, {username}!</h1>

            <h3 className="primary_text">Your final score is:</h3>

            <h3 className="final_score">{score}</h3>
            <button className="play_again_btn" onClick={handleClick}>
                Play Again
                <span></span><span></span><span></span><span></span>
            </button>

            <button className="play_again_btn" onClick={quitGame}>
                Quit 
                <span></span><span></span><span></span><span></span>
            </button>
        </Card>
    </>
  );
};

export default Finish;