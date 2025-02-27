import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Quiz() {
  const location = useLocation();
  const navigate = useNavigate();
  const name = location.state?.name || "Player";

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    axios.get("http://localhost:5000/api/questions").then((res) => {
      setQuestions(res.data);
    });
  }, []);

  useEffect(() => {
    if (timer === 0) {
      handleNext();
    }
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleSelect = (option) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: option });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(15);
    } else {
      navigate("/result", { state: { questions, selectedAnswers, name } });
    }
  };

  if (questions.length === 0) return <h2>Loading...</h2>;

  return (
    <div className="container">
      <h2>{questions[currentQuestion].question}</h2>
      <div className="options">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(option)}
            className={
              selectedAnswers[currentQuestion] === option ? "selected" : ""
            }
          >
            {option}
          </button>
        ))}
      </div>
      <p>Time left: {timer} seconds</p>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Quiz;
