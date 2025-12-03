function Answers({ score, totalQuestions, onRestart }) {
  return (
    <div className="answers-container">
      <h2>Quiz Completed!</h2>
      <p>Your score: {score} out of {totalQuestions}</p>
      <button className="restart-button" onClick={onRestart}>
        Try Again
      </button>
    </div>
  );
}

export default Answers; 