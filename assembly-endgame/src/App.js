import { useState } from "react";
import "./App.css";
import { languages } from "./languages";
// console.log(languages);

export default function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = useState("react");

  const langugeElements = languages.map((lang) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };

    return (
      <span className="chip" style={styles} key={lang.name}>
        {lang.name}
      </span>
    );
  });

  const letterElements = currentWord
    .split("")
    .map((letter, index) => <span key={index}>{letter.toUpperCase()}</span>);

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the world within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section className="game-status">
        <h2>You win!</h2>
        <p>Well done! 🎊</p>
      </section>
      <section className="language-chips">{langugeElements}</section>
      <section className="word">{letterElements}</section>
    </main>
  );
}
