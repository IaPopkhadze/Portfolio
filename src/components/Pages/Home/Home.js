import React from "react";
import "../PagesStyle/pagesStyle.css";
import iachka from './iachka.PNG'
import { AiFillGithub } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const Home = () => {
  return (
    <div className="home">
      <div className="home_content_container">
        <div className="logo" style={{overflow: 'hidden'}}>
          <img src={iachka} alt="" style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'left'}} />
        </div>
        <h1 className="name">{`<< Ia Popkhadze >>`}</h1>
        <p className="profession">FRONT-END DEVELOPER</p>
        <div className="icons_container">
          <a href="https://github.com/IaPopkhadze" target="_blank">
            <AiFillGithub />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100085406089587"
            target="_blank"
          >
            <CgFacebook />
          </a>
          <a href="https://www.instagram.com/iako_popkhadze/" target="_blank">
            <AiFillInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/ia-popkhadze-b79b11244/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
