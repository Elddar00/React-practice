import React from "react";

export default function App2() {
  const [count, setCount] = React.useState(0);

  function subtract() {
    if (count > 0) setCount(count - 1);
  }

  function add() {
    setCount(count + 1);
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
