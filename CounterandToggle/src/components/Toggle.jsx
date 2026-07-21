function Toggle({ darkMode, toggleMode }) {

  return (

    <button 
      className="toggle"
      onClick={toggleMode}
    >

      {darkMode ? "☀️ Bright Mode" : "🌙 Dark Mode"}

    </button>

  );

}


export default Toggle;