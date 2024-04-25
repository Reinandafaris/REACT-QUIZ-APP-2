import quizCompleted from "../assets/quiz-complete.png";

export default function Summary({ score, onRestart }) {
  return (
    <div id="summary">
      <img src={quizCompleted} alt="" />
      <h2>Quiz Selesai!</h2>
      <h4 className="score">Skor Kamu: {score}</h4>
      <button id="button-done" onClick={onRestart}>
        Mulai Lagi
      </button>
    </div>
  );
}
