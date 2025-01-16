export default function Joke(props) {
  //   console.log(isShown);
  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      <p>{props.punchline}</p>
      <hr />
    </div>
  );
}
