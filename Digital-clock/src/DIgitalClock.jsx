import react,{useEffect,useState} from 'react';
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
let hour=String(time.getHours()).padStart(2,"0");
let minute=String(time.getMinutes()).padStart(2,"0");
let second=String(time.getSeconds()).padStart(2,"0");


    return(
    <>
    <div className={color?"theme-dark":"theme-light"}>
    <button className={color ? "dark" : "bright"} onClick={Change}>{color ? "dark" : "bright"}</button>
      <div className='container'>
        <div className='clock'>
            <span>{hour}:{minute}:{second}</span>
        </div>
      </div>
      </div>
    </>
      
    )
}
export default DIgitalClock;