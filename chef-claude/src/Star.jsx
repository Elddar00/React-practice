export default function Star(props) {
  const starFilled = "/star-filled.png";
  const starEmpty = "/star-empty.png";

  let starIcon = props.isFilled ? starFilled : starEmpty;

  return (
    <button
      onClick={props.handleClick}
      aria-pressed={props.isFilled}
      aria-label={props.isFilled ? "Remove from favorites" : "Add to favorites"}
      className="favorite-button"
    >
      <img
        src={starIcon}
        alt={props.isFilled ? "filled star icon" : "empty star icon"}
        className="favorite"
      />
    </button>
  );
}
