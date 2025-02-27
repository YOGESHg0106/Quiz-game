import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const startQuiz = () => {
    if (name.trim()) {
      navigate("/quiz", { state: { name } });
    } else {
      alert("Please enter your name");
    }
  };

  return (
    <div className="container">
      <h1>Welcome to the Quiz Game!</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
}

export default Home;
