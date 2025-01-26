import "./App.css";
import { useState } from "react";
import Die from "./Die";

function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  // generate random number
  // const newDice = [];

  //   for (let i = 0; i < 10; i++) {
  //     const rand = Math.ceil(Math.random() * 6);
  //     newDice.push(rand);
  //   }
  //   return newDice;

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
  }

  function rollDice() {
    setDice(generateAllNewDice());
  }

  const diceElements = dice.map((num) => <Die value={num} />);

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
