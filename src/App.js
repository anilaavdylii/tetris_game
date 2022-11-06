import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Tetris from './pages/tetris/Tetris';
import React from 'react';


function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/' 
          element={<Home/>} />
        <Route 
          path='/tetris' element={<Tetris/>} />
      </Routes >
    </div>
  );
}

export default App;
