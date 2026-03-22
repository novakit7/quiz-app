import { Link } from "react-router-dom";

export default function About() {
  return (
    <div
      className="container py-5"
      style={{ height: "110vh" }} // light blue
    >
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">

          <div className="card shadow-lg border-0"style={{backgroundColor:' #7f7c94'}}>

            <div className="card-body p-5 text-dark"> {/* all text black */}

              {/* Title */}
              <h1 className="text-center mb-4 fw-bold">
                📘 About Quiz Master
              </h1>

              {/* Intro */}
              <p className="lead text-center">
                Quiz Master is a modern web app designed to test your knowledge
                across multiple categories with a fun and interactive experience.
              </p>

              <hr />

              {/* Features */}
              <h4 className="fw-bold">🚀 Features</h4>
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item text-dark">🎯 Category-based quizzes</li>
                <li className="list-group-item text-dark">🧠 10 questions per quiz</li>
                <li className="list-group-item text-dark">⏱️ 30-second timer</li>
                <li className="list-group-item text-dark">📊 Instant score & grading</li>
              </ul>

              {/* Tech Stack */}
              <h4 className="fw-bold">💻 Tech Stack</h4>
              <div className="d-flex flex-wrap gap-2 mb-4">
                <span className="badge bg-light text-dark border">React</span>
                <span className="badge bg-light text-dark border">Bootstrap</span>
                <span className="badge bg-light text-dark border">JavaScript</span>
                <span className="badge bg-light text-dark border">React Router</span>
              </div>

              {/* Button */}
              <div className="text-center mt-4">
                <Link to="/" className="btn btn-dark px-4">
                  Back to Home
                </Link>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}