import React, { useState, useContext, useEffect, useRef } from 'react';
import { createStage, checkCollision } from '../../gameHelpers';
import {useNavigate} from 'react-router-dom';
import { useInterval } from '../../hooks/useInterval';
import Stage from '../../components/Stage';
import Display from '../../components/Display';
import CountDownTimer from '../../components/CountDownTimer';
import { TetrisContext } from '../../context/TetrisContext';
import './Tetris.css';
import Audio from "../../components/Audio"
import {GrResume, GrPause, GrHome} from 'react-icons/gr';
import useSound from 'use-sound'
import levelup from "../../images/level-up.mp3";
import lose from "../../images/lose.mp3";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Tetris = () => {

  const [levelUpSound] = useSound(levelup);
  const [loseSound] = useSound(lose)

  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const inputRef = useRef(null);

  const {el, player, updatePlayerPos, resetPlayer, playerRotate, stage, setStage, score, setScore, rows, setRows, level, setLevel } = useContext(TetrisContext);

  const navigate = useNavigate();
  const navigateHome = useNavigate();

  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        setDropTime(1000 / (level + 1));
      }
    }
  };

  const notify = () => toast.info(``, {
    position: "top-left",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    icon: () =>  <img margin-left="10px" height="70px" src={require(`../../images/level-up.png`)}/>
    });


  const drop = () => {
    if (rows > (level + 1) * 5) {
      notify();
      levelUpSound();
      setLevel(prev => prev + 1);
      setDropTime(1000 / (level + 1) + 200); 
  }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  useInterval(() => {
    drop();
  }, dropTime);

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

 

  
  let onTimesup = () => {
      setStage(createStage());
      setDropTime(1000);
      resetPlayer();
      setScore(0);
      setLevel(0);
      setRows(0);
      setGameOver(false);
  }

  const keys = Object.keys(el);

  useEffect(()=>{
    if(gameOver){
      navigate('/finish');
      loseSound();
    }
    inputRef.current.focus();
  })

  

  const resumeClick = ()=>{
    setStage(createStage());
      setDropTime(1000);
      resetPlayer();
      setScore(0);
      setLevel(0);
      setRows(0);
      setGameOver(false);
  }

  const pauseClick = () => {
    if(dropTime !== null){
      setDropTime(null);
    }else{
      setDropTime(1000);
    }
  }

  const display = {
    display: "flex",
    margin: "0 40px 0px 0",
    padding: "9px",
    border: "4px",
    minHeight: "18px",
    width: "100%",
    borderRadius: "5px",
    color:'white',
    background: "transparent",
    fontFamily: "Oswald",
    fontSize: "1.5rem",
    backgroundColor:"gray",
    justifyContent:"center"

  }

  return(
      <div className='tetrisWrapper'
        role="button"
        tabIndex="0"
        onKeyDown={e => move(e)}
        onKeyUp={keyUp}
        ref={inputRef}
      >
        <ToastContainer
            position="top-left"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="colored"
            progressClassName="toastProgress"
            bodyClassName="toastBody"
            />
        <div className='tetris'>
           <aside>
              <div>
                <p className='text'>Score:</p><Display text={` ${score}`} />
                <p className='text'>Level:</p> <div style={display}>
                      {level}
                  </div>
                <p className='text'>Rows:</p><Display text={` ${rows}`} />
                <p className='text'>Next:</p> <div style={display}>
                      {el[keys[2]].includes(',') ? 
                        ' ' :
                        <img src={require(`../../images/${el[keys[2]]}.png`)} height="40px" alt="" />
                      }
                  </div>
              </div>
            <CountDownTimer
              onTimesup={onTimesup}
              seconds={3}
            />
            <div className='icons'>
              <button className="icons_btn" >
                 <GrHome onClick={()=> navigateHome("/")}/>
              </button>
              <button className="icons_btn" onClick={resumeClick}>
                  <GrResume />
              </button>
              <button className="icons_btn" onClick={pauseClick}>
                  <GrPause />
              </button>
              <Audio/>
            </div>
            <div>
            </div>
          </aside>
          <Stage stage={stage} />
        </div>
      </div>
  );
};

export default Tetris;