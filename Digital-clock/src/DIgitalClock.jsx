import React, {useEffect, useState} from 'react';
import background from "./assets/backgroundimage.png";
function DIgitalClock(){
    const[time,SetTime]=useState(new Date());
    const[color,SetColor]=useState(false);

    useEffect(()=>{
        const IntervalId=setInterval(()=>{
            SetTime(new Date())
        },1000);

        return()=>{
            clearInterval(IntervalId);
        }
    },[]);

  useEffect(() => {
    if(color){
        document.body.style.background = 
        `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
        url(${background}) center/cover no-repeat fixed`;
    }
    else{
        document.body.style.background = 
        `url(${background}) center/cover no-repeat fixed`;
    }
}, [color]);

    function Change(){
        SetColor(!color);
    }
    function formatTime(){
        let hour=time.getHours();
        let minute=time.getMinutes();
         let second=time.getSeconds();
         const meridiem=hour>=12?"PM":"AM"
        hour=hour% 12 || 12;
         hour = String(hour).padStart(2,"0");
    minute = String(minute).padStart(2,"0");
    second = String(second).padStart(2,"0");
        return `${hour}: ${minute}: ${second} ${meridiem}`
    }


    return(
    <>
    <div className={color?"theme-dark":"theme-light"}>
    <button className={color ? "dark" : "bright"} onClick={Change}>{color ? "dark" : "bright"}</button>
      <div className='container'>
        <div className='clock'>
            <span>{formatTime()}</span>
        </div>
      </div>
      </div>
    </>
      
    )
}
export default DIgitalClock;