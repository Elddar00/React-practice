function FinishScreen({ points, maxPossiblePoints, highscore }) {
  const procentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (procentage === 100) emoji = "🥇";
  if (procentage >= 80 && procentage < 100) emoji = "🌟";
  if (procentage >= 50 && procentage < 80) emoji = "😀";
  if (procentage >= 0 && procentage < 50) emoji = "🤔";
  if (procentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You score <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(procentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
    </>
  );
}

export default FinishScreen;
