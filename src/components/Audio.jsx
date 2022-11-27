import React, {useContext} from 'react';
import { TetrisContext } from '../context/TetrisContext';
import Song from "../images/audio.mp3"
import { GrMusic, GrFormClose } from 'react-icons/gr';

const Audio = () => {

   const {isPlaying, setIsPlaying} = useContext(TetrisContext);

    const handleClick = () =>{
        setIsPlaying(!isPlaying)
    }

  return (
    <div>
        {isPlaying 
        ?
        <>
            <audio autoPlay loop>
                <source src={Song} />
            </audio>
            <button className="icons_btn" onClick={handleClick}>
                <GrMusic />
            </button>
        </>
        :
        <button className="icons_btn" onClick={handleClick}>
            <GrFormClose />
        </button>
    }
    </div>
  )
}

export default Audio