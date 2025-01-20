import React from "react";

export default function Header(props) {
  return (
    <header>
      <img src="./userrIconIcon.png" />
      <p>{props.userName}</p>
    </header>
  );
}
