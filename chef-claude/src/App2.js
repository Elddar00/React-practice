import React from "react";

export default function App2() {
  const [count, setCount] = React.useState(0);

  function subtract() {
    setCount((prevCount) => {
      if (prevCount > 0) {
        return prevCount - 1;
      }
      return prevCount;
    });
  }

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <main className="container">
      <h1>How many times will Bob say "state" in this section?</h1>
      <div className="counter">
        <button
          onClick={subtract}
          className="minus"
          aria-label="Decrease count"
        >
          –
        </button>
        <h2 className="count">{count}</h2>
        <button onClick={add} className="plus" aria-label="Increase count">
          +
        </button>
      </div>
    </main>
  );
}
