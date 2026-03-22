import { Link } from "react-router-dom";
import './App.css';

export default function SideBar() {
  return (
    <div className="s-sidebar">

      {/* profile */}
      <div className="s-profile">
        <i className="fa-solid fa-child-reaching"></i>
        <span className="s-name">Choose Category</span>
      </div>

      <div className="s-menu">
        <ul>

          <li>
            <Link to="/quiz/9" className="menubutton">
              <i className="fa-solid fa-lightbulb"></i> General Knowledge
            </Link>
          </li>

          <li>
            <Link to="/quiz/17" className="menubutton">
              <i className="fa-solid fa-flask"></i> Science
            </Link>
          </li>

          <li>
            <Link to="/quiz/20" className="menubutton">
              <i className="fa-solid fa-om"></i> Mythology
            </Link>
          </li>

          <li>
            <Link to="/quiz/21" className="menubutton">
              <i className="fa-solid fa-baseball-bat-ball"></i> Sports
            </Link>
          </li>

          <li>
            <Link to="/quiz/22" className="menubutton">
              <i className="fa-solid fa-earth-asia"></i> Geography
            </Link>
          </li>

          <li>
            <Link to="/quiz/27" className="menubutton">
              <i className="fa-solid fa-dog"></i> Animals
            </Link>
          </li>

          <li>
            <Link to="/quiz/18" className="menubutton">
              <i className="fa-solid fa-tablet-screen-button"></i> Gadgets
            </Link>
          </li>

        </ul>
      </div>
    </div>
  );
}