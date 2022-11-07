import React,{useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import Card from '../../components/card/Card'
import "./Home.css";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import {quotes} from "../../quotes"

const Home = ({topScore, username, setUsername}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState([]);

  const fetchQuote = async ()=>{
    const randomNum = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomNum].quote);
  }


  useEffect(()=>{
    setLoading(true);
    fetchQuote();
    setTimeout(()=>{
      setLoading(false);
    },1000)
  },[]);

 

  const handleClick = ()=>{
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
      {loading ?
        <ClimbingBoxLoader
              color={"#eee"}
              loading={loading}
              size={30}
            />
        :
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
                Top score: <span>{topScore}</span>
              </p>
          </Card>

      }
    </>
  );
};

export default Home;