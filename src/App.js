import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import "./components/LayoutStyle/layoutStyle.css";
import Home from "./components/Pages/Home/Home.js";
import About from "./components/Pages/About/About.js";
import Contact from "./components/Pages/Contact/Contact.js";
import Portfolio from "./components/Pages/Portfolio/Portfolio.js";
import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import { RxHamburgerMenu } from "react-icons/rx";
function App() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  function toggleOverlay() {
    setIsOverlayOpen(true);
  }
  return (
    <BrowserRouter>
      <div className="layout">
        <div className="hamburger" onClick={toggleOverlay}>
          <RxHamburgerMenu />
        </div>
        {/* hamburger menu */}
        <div className={isOverlayOpen ? "overlay open" : "overlay"}>
          <div className="overlay-content">
            <nav>
              <Link
                onClick={() => setIsOverlayOpen(false)}
                className="listItem"
                to="/"
              >
                Home
              </Link>
              <Link
                onClick={() => setIsOverlayOpen(false)}
                className="listItem"
                to="/about"
              >
                About
              </Link>
              <Link
                onClick={() => setIsOverlayOpen(false)}
                className="listItem"
                to="/portfolio"
              >
                Portfolio
              </Link>
              <Link
                onClick={() => setIsOverlayOpen(false)}
                className="listItem"
                to="/contact"
              >
                Contact
              </Link>
            </nav>
          </div>
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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
