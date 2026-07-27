import { useState } from "react";
import "./App.css";

import Counter from "./components/Counter";
import Toggle from "./components/Toggle";


function App() {

  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(true);


  function increase() {
    setCount(count + 1);
  }


  function decrease() {
    setCount(count - 1);
  }


  function reset() {
    setCount(0);
  }


  function toggleMode() {
    setDarkMode(!darkMode);
  }


  return (

    <div className={darkMode ? "app dark" : "app"}>

      <Toggle 
        darkMode={darkMode}
        toggleMode={toggleMode}
      />


      <Counter
        count={count}
        increase={increase}
        decrease={decrease}
        reset={reset}
      />

    </div>

  );
}

export default App;