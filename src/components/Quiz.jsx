export default function Quiz({
  question,
  answers,
  handleAnswerSelect,
  progressBarValue,
}) {
  return (
    <div id="quiz">
      <div id="question">
        <progress value={progressBarValue} max="100" />

        <p className="question">{question}</p>

        <ul id="answers">
          {answers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleAnswerSelect(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
