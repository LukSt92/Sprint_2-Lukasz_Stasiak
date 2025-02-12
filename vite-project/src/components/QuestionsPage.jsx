import React, { useState } from "react";
import { QUESTIONS } from "../assets/quizQuestions";
import { Button } from "./Button";

export const QuestionsPage = () => {
  const [questions, setQuestions] = useState(QUESTIONS);
  const [counter, setCounter] = useState(0);
  const [answers, setAnswers] = useState([]);

  function handleClick(e) {
    const answer = e.target.innerText;
    setAnswers((prev) => [...prev, answer]);
    setCounter(counter + 1);
  }
  if (counter === questions.length)
    // Dodać logikę i stworzyć komponent z finałową stroną.
    return (
      <div>
        <h3>test</h3>
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
            handleClick={(e) => handleClick(e)}
          />
        ))}
      </div>
    );
  }
};
