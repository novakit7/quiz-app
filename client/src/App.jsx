import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Quiz from "./Quiz";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Footer from "./Footer";
import About from "./About";

function App() {
  return (
    <div>
      <Navbar/>
      <SideBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:category" element={<Quiz />} />
        <Route path="/about" element = {<About></About>}/>
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;