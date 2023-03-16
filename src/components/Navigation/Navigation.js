import React, { useState } from "react";
import "./NavigationStyle/navigation.css";
import { ImHome } from "react-icons/im";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
import { BsChatTextFill } from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";
const Navigation = () => {
  const [navbarActivation, setNavbarActivation] = useState(0);
  const navigate = useNavigate();
  return (
    <div className="navigation">
      <h1 className="portfolio">
        <div className="border1"></div>
        <div className="border2"></div>
        Portfolio
        <div className="border3"></div>
        <div className="border4"></div>
      </h1>
      <ul className="list_items">
        <li
          onClick={() => {
            setNavbarActivation(0);
            navigate("/");
          }}
          style={navbarActivation == 0 ? { color: "#ec1839" } : null}
        >

          <span>
            <ImHome />
          </span>
          <p>Home</p>
        </li>
     
        <li
          onClick={() => {
            setNavbarActivation(1);
            navigate("about");
          }}
          style={navbarActivation == 1 ? { color: "#ec1839" } : null}
        >
          <span>
            <BsFillPersonFill />
          </span>
          <p>About</p>
        </li>

        <li
          onClick={() => {
            setNavbarActivation(3);
            navigate("portfolio");
          }}
          style={navbarActivation == 3 ? { color: "#ec1839" } : null}
        >
          <span>
            <HiDocumentText />
          </span>
          <p>Portfolio</p>
        </li>
        <li
          onClick={() => {
            setNavbarActivation(4);
            navigate("contact");
          }}
          style={navbarActivation == 4 ? { color: "#ec1839" } : null}
        >
          <span>
            <BsChatTextFill />
          </span>
          <p>Contact</p>
        </li>
      </ul>
      <p className="autor">@Popkhadze Ia</p>
    </div>
  );
};

export default Navigation;
