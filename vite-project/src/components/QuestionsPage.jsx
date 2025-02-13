import React, { useState } from "react";
import { QUESTIONS } from "../assets/quizQuestions";
import { Button } from "./Button";
import { QuizSummary } from "./QuizSummary";

export const QuestionsPage = () => {
  const [questions] = useState(QUESTIONS);
  const [counter, setCounter] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  function handleClick(answer) {
    setAnswers((prev) => [...prev, answer]);
    setCounter(counter + 1);
    answer.isCorrect && setCorrectAnswers(correctAnswers + 1);
  }
  if (counter === questions.length)
    return (
      <div>
        <QuizSummary
          questions={questions}
          answers={answers}
          correctAnswers={correctAnswers}
        />
      </div>
    );
  else {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h3>
          Pytanie {counter + 1}: {questions[counter].text}
        </h3>
        {questions[counter].answers.map((answer) => (
          <Button
            textToShow={answer.text}
            key={answer.text}
            handleClick={() => handleClick(answer)}
          />
        ))}
      </div>
    );
  }
};
