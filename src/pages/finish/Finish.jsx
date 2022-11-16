import React from 'react';
import Card from '../../components/Card';
import "./Finish.css";
import { useNavigate } from 'react-router-dom';



const Finish = ({username, setUsername, topScore, setTopScore, score, setScore}) => {

    
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