function Counter({ count, increase, decrease, reset }) {

  return (

    <div>

      <h1>Counter</h1>

      <h2>{count}</h2>


      <div className="buttons">

        <button onClick={decrease}>
          Decrease
        </button>


        <button onClick={reset}>
          Reset
        </button>


        <button onClick={increase}>
          Increase
        </button>

      </div>

    </div>

  );
}


export default Counter;