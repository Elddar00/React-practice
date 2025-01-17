import React from "react";

export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false);

  // const [unreadMessage, setUnreadMessage] = React.useState(["a", "b"]);
  const [messages, setMessages] = React.useState(["a", "b"]);

  function toggleShown(prevBtn) {
    setIsShown((prevShown) => !prevShown);
  }

  function determineText() {
    if (messages.length === 0) {
      return "You're all caught up";
    } else if (messages.length === 1) {
      return "You have 1 unread message";
    } else {
      return `You have ${messages.length} unread messages`;
    }
  }

  return (
    <>
      {/* <div>
        {props.setup && <h3>{props.setup}</h3>}
        {isShown ? <p>{props.punchline}</p> : null}
        <button onClick={toggleShown}>
          {isShown ? "Hide" : "Show"} punchline
        </button>
        <hr />
      </div> */}

      {/* <div>
        {unreadMessage.length > 0 && (
          <h1>You have {unreadMessage.length} unread messages!</h1>
        )}
      </div> */}

      <h1>{determineText()}</h1>
    </>
  );
}
