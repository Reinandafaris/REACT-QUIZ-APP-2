import React, { useEffect, useCallback } from "react";
import useQuizState from "./hooks/useQuizState";
import questions from "../public/data.json";
import Summary from "./components/Summary";
import Header from "./components/Header";
import Quiz from "./components/Quiz";

const App = () => {
  const {
    score,
    currentQuestion,
    progressBarValue,
    handleAnswerSelect,
    handleNextQuestion,
    setProgressBarValue,
  } = useQuizState(questions);

  const handleProgressBarTick = useCallback(() => {
    if (progressBarValue > 0) {
      setProgressBarValue((prevValue) => prevValue - 1);
    }
  }, [progressBarValue]);

  useEffect(() => {
    const intervalId = setInterval(handleProgressBarTick, 100);
    return () => clearInterval(intervalId);
  }, [handleProgressBarTick]);

  useEffect(() => {
    if (progressBarValue === 0) {
      handleNextQuestion();
    }
  }, [progressBarValue]);

  return (
    <>
      {currentQuestion >= questions.length ? (
        <Summary
          score={score}
          onRestart={() => window.location.reload()}
        />
      ) : (
        <>
          <Header />
          <Quiz
            progressBarValue={progressBarValue}
            handleAnswerSelect={handleAnswerSelect}
            answers={questions[currentQuestion].answers}
            question={questions[currentQuestion].question}
          />
        </>
      )}
    </>
  );
};

export default App;
