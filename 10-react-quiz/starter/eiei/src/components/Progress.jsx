function Progress({index, numQestion, points, maxPosiblePoints, answer}) {
  return (
    <header className="progress">
      <progress max={numQestion} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numQestion}
      </p>

      <p>
        <strong>{points}</strong> / {maxPosiblePoints}
      </p>
    </header>
  );
}
export default Progress;
