import React,{useState,useEffect,useRef} from 'react';

function StopWatch(){
    const[isRunning,SetRunning]=useState(false);
    const [elapsedTime,SetElapsedTime]=useState(0);
    const intervalIdRef=useRef(null);
    const StartTimeRef=useRef(0);
    useEffect(()=>{
          if(isRunning){
               intervalIdRef.current = setInterval(()=>{
               SetElapsedTime(Date.now() - StartTimeRef.current);
            },10);
          }
          return ()=>{
            clearInterval(intervalIdRef.current);
          }
    },[isRunning]);
 
    function Start(){
          SetRunning(true);
          StartTimeRef.current=Date.now()-elapsedTime;
    }
    function Stop(){
       SetRunning(false);
    }
    function Reset(){
     SetElapsedTime(0);
     SetRunning(false);
    }
    function FormatTime(){
        let hour=Math.floor(elapsedTime/(1000 * 60 *60));
        let minutes=Math.floor(elapsedTime/(1000 * 60) % 60);
        let second=Math.floor(elapsedTime/(1000)%60);
        let milisecond=Math.floor((elapsedTime%1000)/10);
       hour=String(hour).padStart(2,"0");
       minutes=String(minutes).padStart(2,"0");
       second=String(second).padStart(2,"0");
       milisecond=String(milisecond).padStart(2,"0");
     return `${hour}:${minutes}:${second}:${milisecond}`;
    }
    return(
        <div className='stopWatch'>
                <div className='display'>
                    {FormatTime()}
                </div>
                <div className='btn'>
                     <button className="btn" onClick={Start}>START</button>
                <button className="btn" onClick={Stop}>Stop</button>
                <button className="btn" onClick={Reset}>Reset</button>
                </div>
               
        </div>
    )
}
export default StopWatch;