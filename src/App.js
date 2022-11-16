import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Tetris from './pages/tetris/Tetris';
import React, {useState} from 'react';
import Finish from './pages/finish/Finish';

import {TetrisProvider} from "./context/TetrisContext";


function App() {
 
  return (
    <TetrisProvider>
      <div className="App">
        <Routes >
          <Route path='/' 
            element={<Home />} />
          <Route 
            path='/tetris' element={<Tetris />} />
          <Route 
            path='/finish'  element={<Finish />} />
        </Routes >
        
      </div>
    </TetrisProvider>
  );
}

export default App;
