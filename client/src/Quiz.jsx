import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Quiz() {
  const { category } = useParams();

  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [loadedCategory, setLoadedCategory] = useState(null);

  useEffect(() => {
    if (!category || loadedCategory === category) return;

    setLoadedCategory(category);

    fetch(`https://opentdb.com/api.php?amount=5&category=${category}&type=multiple`)
      .then(res => res.json())
      .then(data => {
        if (data.response_code === 0) {
          setQuestions(data.results);
          setCurrent(0);
          setScore(0);
        } else {
          console.log("No questions / API limit");
          setQuestions([]);
        }
      })
      .catch(err => console.log(err));
  }, [category]);

  //  LOADING STATE
  if (!questions || questions.length === 0) {
    return <p className="m-4">Loading...</p>;
  }

  // RESULT SCREEN
  if (current === -1) {
    return (
      <div className="container mt-4">
        <h2>🎉 Score: {score} / {questions.length}</h2>
      </div>
    );
  }

  const q = questions[current];

  if (!q) return <p>Loading question...</p>;

  const options = [...q.incorrect_answers, q.correct_answer]
    .sort(() => Math.random() - 0.5);

  const handleAnswer = (option) => {
    if (option === q.correct_answer) {
      setScore(prev => prev + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(prev => prev + 1);
    } else {
      setCurrent(-1);
    }
  };

  return (
    <div className="container mt-4">
      <h5>Question {current + 1} / {questions.length}</h5>

      <h4 dangerouslySetInnerHTML={{ __html: q.question }} />

      <div className="d-grid gap-2 mt-3">
        {options.map((opt, i) => (
          <button
            key={i}
            className="btn btn-outline-primary"
            onClick={() => handleAnswer(opt)}
            dangerouslySetInnerHTML={{ __html: opt }}
          />
        ))}
      </div>
    </div>
  );
}