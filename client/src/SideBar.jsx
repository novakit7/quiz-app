import {Link} from 'react-router-dom'
import './App.css' 
export default function SideBar() {
  return (
    <div className="s-sidebar">

      {/* sidebar profile */}
      <div className="s-profile">
        <i className="fa-solid fa-child-reaching"></i>
        <span className="s-name">choose category</span>
      </div>

      <div className="s-menu">
        <ul>
         

          <li><Link to="/backlog" className="menubutton"><i className="fa-solid fa-lightbulb"></i> General Knowledge</Link></li>

          <li><Link to="/pending" className="menubutton"><i className="fa-solid fa-flask"></i> Science</Link></li>

          <li><Link to="/completed" className="menubutton"><i className="fa-solid fa-om"></i> Mythology</Link></li>

          <li><Link to="/totalTask" className="menubutton"><i className="fa-solid fa-baseball-bat-ball"></i>Sports</Link></li>

          <li><Link to="/addTask" className="menubutton"><i className="fa-solid fa-earth-asia"></i> Geography</Link></li>
        <li className='menubutton'><i className="fa-solid fa-dog"></i>Animals</li>
        <li className="menubutton"><i className="fa-solid fa-tablet-screen-button"></i>Gadgets</li>
        </ul>
      </div>
      </div>

  )
}
