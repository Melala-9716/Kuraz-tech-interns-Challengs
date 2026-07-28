import { useState} from "react";

function ColorPicker(){
    const[color,SetColor]=useState("#FFFFFF");
    const Style=(event)=>{SetColor(event.target.value)};
    return(<div className="Container">
          <h1>Color Picker</h1>
          <div className="Color-Style-Container" style={{backgroundColor : color}}>
              <p>Selected Color:{color}</p>
          </div>
          <label>Select a Color:</label>
          <input type="color" value={color} onChange={Style}/>
    </div>)
}
export default ColorPicker;