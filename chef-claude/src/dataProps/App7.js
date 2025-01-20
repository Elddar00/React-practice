import React from "react";
import Header from "./Header";
import Body from "./Body";
import "./app7.css";

export default function App7() {
  const [userName, setUserName] = React.useState("Joe");

  return (
    <main>
      <Header userName={userName} />
      <Body userName={userName} />
    </main>
  );
}
