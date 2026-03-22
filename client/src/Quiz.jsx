import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Quiz.css";

export default function Quiz() {
  const { category } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [time, setTime] = useState(30);
  const [options, setOptions] = useState([]);

  const fetching = useRef(false);

  // HANDLE ANSWER
  const handleAnswer = (option) => {
    if (selected) return;

    const q = questions[current];
    setSelected(option);

    if (option === q.correct_answer) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      setSelected(null);

      if (current + 1 < questions.length) {
        setCurrent(prev => prev + 1);
      } else {
        setCurrent(-1);
      }
    }, 800);
  };

  //FETCH + CACHE + FALLBACK (10 QUESTIONS)
  useEffect(() => {
    if (!category || fetching.current) return;

    const key = `quiz-${category}-10`;
    const saved = localStorage.getItem(key);

    if (saved) {
      setQuestions(JSON.parse(saved));
      return;
    }

    fetching.current = true;

    fetch(`https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`)
      .then(res => res.json())
      .then(data => {
        if (data.response_code === 0) {
          setQuestions(data.results);
          localStorage.setItem(key, JSON.stringify(data.results));
        } else {
          throw new Error("API limit");
        }
      })
      .catch(() => {
        // fallback (never fail)
        setQuestions([
          {
            question: "What is React?",
            correct_answer: "Library",
            incorrect_answers: ["Framework", "Language", "Database"]
          },
          {
            question: "What is JavaScript?",
            correct_answer: "Programming Language",
            incorrect_answers: ["Database", "OS", "Browser"]
          }
        ]);
      });
  }, [category]);

  // SHUFFLE ONCE (fix dynamic switching)
  useEffect(() => {
    if (!questions[current]) return;

    const q = questions[current];

    const shuffled = [...q.incorrect_answers, q.correct_answer]
      .sort(() => Math.random() - 0.5);

    setOptions(shuffled);
  }, [current, questions]);

  // TIMER (30 sec)
  useEffect(() => {
    if (questions.length === 0 || current === -1) return;

    setTime(30);

    const interval = setInterval(() => {
      setTime(prev => {
        if (prev === 1) {
          handleAnswer(null);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [current, questions]);

  // LOADING
  if (!questions || questions.length === 0) {
    return <p className="quiz-loading">Loading...</p>;
  }

  // RESULT SCREEN (PROFESSIONAL)
  if (current === -1) {
    const percentage = Math.round((score / questions.length) * 100);

    let grade = "C";
    let message = "Keep practicing ";

    if (percentage >= 80) {
      grade = "A";
      message = "Excellent work! ";
    } else if (percentage >= 50) {
      grade = "B";
      message = "Good job";
    }

    return (
      <div className="quiz-result-container">
        <div className="quiz-result-card">

          <h2 className="result-title">Quiz Completed</h2>

          <h1 className="result-score">
            {score} / {questions.length}
          </h1>

          <h3 className="result-percentage">{percentage}%</h3>

          <h4
            className={`result-grade ${
              grade === "A"
                ? "text-success"
                : grade === "B"
                ? "text-warning"
                : "text-danger"
            }`}
          >
            Grade: {grade}
          </h4>

          <p className="result-message">{message}</p>

          <button
            className="quiz-btn mt-3"
            onClick={() => navigate("/")}
          >
            <i className="fa-solid fa-arrows-rotate"></i>Play Again
          </button>

        </div>
      </div>
    );
  }

  const q = questions[current];
  if (!q) return <p>Loading...</p>;

  //BUTTON COLOR LOGIC
  const getClass = (opt) => {
    if (!selected) return "quiz-btn";

    if (opt === q.correct_answer) return "quiz-btn correct";
    if (opt === selected) return "quiz-btn wrong";

    return "quiz-btn disabled";
  };

  return (
    <div className="quiz-container">

      {/* Progress */}
      <div className="progress mb-3">
        <div
          className="progress-bar"
          style={{ width: `${((current + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Timer */}
      <h6 className="quiz-timer"><i className="fa-solid fa-stopwatch-20"></i>{time}s</h6>

      <h5>
        Question {current + 1} / {questions.length}
      </h5>

      {/* Question */}
      <h4
        className="quiz-question"
        dangerouslySetInnerHTML={{ __html: q.question }}
      />

      {/*  Options */}
      <div className="quiz-options">
        {options.map((opt, i) => (
          <button
            key={i}
            className={getClass(opt)}
            onClick={() => handleAnswer(opt)}
            dangerouslySetInnerHTML={{ __html: opt }}
          />
        ))}
      </div>

    </div>
  );
}