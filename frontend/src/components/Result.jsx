import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <h2>No results found!</h2>;

  const { questions, selectedAnswers, name } = state;
  const score = questions.filter(
    (q, i) => q.answer === selectedAnswers[i]
  ).length;

  return (
    <div className="container">
      <h1>Quiz Completed!</h1>
      <h2>
        {name}, your score is: {score} / {questions.length}
      </h2>
      <button onClick={() => navigate("/")}>Play Again</button>
    </div>
  );
}

export default Result;
