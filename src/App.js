import React  from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Tetris from './pages/tetris/Tetris';
import Finish from './pages/finish/Finish';
import NotFound from './pages/notFound/NotFound';

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
            <Route 
              path="*" element={<NotFound />} />
        </Routes >
        
      </div>
    </TetrisProvider>
  );
}

export default App;
