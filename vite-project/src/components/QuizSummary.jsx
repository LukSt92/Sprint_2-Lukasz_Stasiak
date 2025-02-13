import { Button } from "./Button";

export const QuizSummary = ({ questions, answers, correctAnswers }) => {
  return (
    <div>
      {correctAnswers >= 8 ? (
        <h1 style={{ color: "#006400" }}>Gratulacje, quiz zaliczony!</h1>
      ) : (
        <h1 style={{ color: "#CC0000" }}>Niestety, quiz niezaliczony</h1>
      )}

      <div style={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        <p>Twój wynik to:...</p>
        <p style={{ color: correctAnswers >= 8 ? "#006400" : "#CC0000" }}>
          {correctAnswers * 10} %
        </p>
        <p>({correctAnswers} z 10 poprawnych odpowiedzi)</p>
      </div>
      {console.log(questions, answers)}
      {questions.map((question, index) => (
        <div key={index}>
          <h4 style={{ color: "#007FFF", textAlign: "left" }}>
            Pytanie {index + 1}: {question.text}
          </h4>
          <div style={{ display: "flex", gap: "5px" }}>
            <p style={{ color: "#333", fontWeight: "700" }}>Twoja odpowiedź:</p>
            <p
              style={{
                fontWeight: "700",
                color: answers[index].isCorrect ? "#006400" : "#CC0000",
              }}
            >
              {answers[index].text}
            </p>
          </div>
        </div>
      ))}
      <Button
        textToShow={"Powtórz quiz"}
        bgColor="#006400"
        handleClick={() => window.location.reload()}
      />
    </div>
  );
};
