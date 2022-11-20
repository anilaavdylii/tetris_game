import React,{useState, useRef, useEffect} from 'react'


const CountDownTimer = ({seconds, onTimesup}) => {
  const [countdown, setCountDown] = useState(seconds);
  const timerId = useRef();

  useEffect(()=>{
    timerId.current = setInterval(()=>{
        setCountDown(prev => prev - 1)
    }, 1000)
    return ()=> clearInterval(timerId.current);
  },[])

  useEffect(()=>{
    if(countdown <= 0){
        clearInterval(timerId.current)
        onTimesup();
    }
  },[countdown])

  return (
    <div>
        <>
            <div className='timer'>
                {countdown === 0 ? '' : <p>{countdown}</p>} 
            </div>    
        </>
    </div>
  )
}

export default CountDownTimer
