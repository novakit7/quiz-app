import "./Footer.css";

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <h4 className="footer-title">Quiz App</h4>

        <p className="footer-text">
          Test your knowledge across categories 🚀
        </p>

        <div className="footer-links">
          <span>Home</span>
          <span>Categories</span>
          <span>About</span>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Quiz App
        </p>
      </div>
    </footer>
  );
}