function FinishScreen({points, maxPossiblePoints, highscore, dispatch}) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🧘";
  if (percentage >= 80) emoji = "👑";
  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of (
        {maxPossiblePoints} {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(HighScore: {highscore})</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({type: "restart"})}>
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;