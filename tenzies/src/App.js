import "./App.css";
import Die from "./Die";

function App() {
  // const newDice = [];

  //   for (let i = 0; i < 10; i++) {
  //     const rand = Math.ceil(Math.random() * 6);
  //     newDice.push(rand);
  //   }
  //   return newDice;

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
  }

  console.log(generateAllNewDice());

  return (
    <main>
      <div className="dice-container">
        <Die value={1} />
        <Die value={2} />
        <Die value={3} />
        <Die value={4} />
        <Die value={5} />
        <Die value={6} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
      </div>
    </main>
  );
}

export default App;
