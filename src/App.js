import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/LayoutStyle/layoutStyle.css";
import Home from "./components/Pages/Home/Home.js";
import About from "./components/Pages/About/About.js";
import Contact from "./components/Pages/Contact/Contact.js";
import Portfolio from "./components/Pages/Portfolio/Portfolio.js";
import Services from "./components/Pages/Services/Services.js";
import Navigation from "./components/Navigation/Navigation";
import { RxHamburgerMenu } from "react-icons/rx";
function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <div className="hamburger">
          <RxHamburgerMenu />
        </div>
        <div className="layout_left_side">
          <Navigation />
        </div>

        <div className="layout_right_side">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Services" element={<Services />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
