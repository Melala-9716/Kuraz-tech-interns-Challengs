import { useState } from "react";

function Counter(){
    const[Count,SetCount]=useState(0);
    return(
        <div className="Container">
        <h1 className="Header">{Count}</h1>
        <button onClick={()=>SetCount(Count+1)}>Increase</button>
        <button onClick={()=>SetCount(0)}>Reset</button>
        <button onClick={()=>SetCount(Count-1)}>Decrease</button>
        </div>
    )
}
 export default Counter;