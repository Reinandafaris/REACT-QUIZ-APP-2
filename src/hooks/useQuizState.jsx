import { useState } from "react";

export default function useQuizState(questions) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [progressBarValue, setProgressBarValue] = useState(100);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setCurrentQuestion((prev) => prev + 1);
    setProgressBarValue(100);
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore((prev) => prev + questions[currentQuestion].score);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setProgressBarValue(100);
  };

  return {
    score,
    selectedAnswer,
    currentQuestion,
    progressBarValue,
    handleAnswerSelect,
    handleNextQuestion,
    setProgressBarValue,
  };
}
