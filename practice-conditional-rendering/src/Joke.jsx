import React from "react";

export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false);

  const [unreadMessage, setUnreadMessage] = React.useState(["a", "b"]);

  function toggleShown(prevBtn) {
    setIsShown((prevShown) => !prevShown);
  }

  return (
    <>
      <div>
        {props.setup && <h3>{props.setup}</h3>}
        {isShown && <p>{props.punchline}</p>}
        <button onClick={toggleShown}>Show punchline</button>
        <hr />
      </div>

      <div>
        {unreadMessage.length > 0 && (
          <h1>You have {unreadMessage.length} unread messages!</h1>
        )}
      </div>
    </>
  );
}
