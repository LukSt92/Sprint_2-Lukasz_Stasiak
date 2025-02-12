import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { QuestionsPage } from "./components/QuestionsPage";

function App() {
  const [quizStart, setQuizStart] = useState(false);

  function handleClick() {
    setQuizStart(true);
  }
  if (quizStart) {
    return <QuestionsPage />;
  } else {
    return (
      <div>
        <h1>Javascript Quiz</h1>
        <Button textToShow="Rozpocznij quiz" handleClick={handleClick} />
      </div>
    );
  }
}

export default App;
