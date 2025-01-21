import React from "react";
import "./App.css";
import padsData from "./pads";
import Pad from "./Pad";

export default function App({ darkMode }) {
  const [pads, setPads] = React.useState(padsData);

  const styles = {
    backgroundColor: darkMode ? "#222222" : "#cccccc",
  };

  const buttonElements = pads.map((pad) => (
    <Pad key={pad.id} color={pad.color} on={pad.on} />
  ));

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
}
