import { useState } from "react";
import "./App.css";
import { languages } from "./languages";
import clsx from "clsx";
import { getFarewellText } from "./utils";

/**
 * Backlog:
 *
 * - Farewell messages in status section
 * - Fix ally issues
 * - Make new game button work
 * - Choose a random word from a list of word
 * - Confetti drop when the user wins
 */

export default function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState([]);
  // console.log(guessedLetters);\

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameLose = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLose;

  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];

  const isLastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  // first way
  // function addGuessedLetter(letter) {
  //   setGuessedLetters((prevLetters) => {
  //     const letterSet = new Set(prevLetters);
  //     letterSet.add(letter);
  //     return Array.from(letterSet);
  //   });
  // }

  function addGuessedLetter(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }

  const langugeElements = languages.map((lang, index) => {
    const isLanguageLost = index < wrongGuessCount;
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    const className = clsx("chip", isLanguageLost && "lost");
    return (
      <span className={className} style={styles} key={lang.name}>
        {lang.name}
      </span>
    );
  });

  const letterElements = currentWord
    .split("")
    .map((letter, index) => (
      <span key={index}>
        {guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
      </span>
    ));

  const keyboardElements = alphabet.split("").map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);

    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    // console.log(className);

    return (
      <button
        className={className}
        key={letter}
        disabled={isGameOver}
        onClick={() => addGuessedLetter(letter)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  const gameStatusClass = clsx("game-status", {
    won: isGameWon,
    lost: isGameLose,
    farewell: !isGameOver && isLastGuessIncorrect,
  });

  function renderGameStatus() {
    if (!isGameOver && isLastGuessIncorrect) {
      return (
        <p className="farewell-message">
          {getFarewellText(languages[wrongGuessCount - 1].name)}
        </p>
      );
    }

    if (isGameWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎊</p>
        </>
      );
    }
    if (isGameLose) {
      return (
        <>
          <h2>Game over!</h2>
          <p>You lose ! Better start learning Assembly !</p>
        </>
      );
    }

    return null;
  }

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the world within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>

      <section className={gameStatusClass}>{renderGameStatus()}</section>

      <section className="language-chips">{langugeElements}</section>
      <section className="word">{letterElements}</section>
      <section className="keyboard">{keyboardElements}</section>
      {isGameOver && <button className="new-game">New Game</button>}
    </main>
  );
}
