import React from "react";
import "../PagesStyle/pagesStyle.css";
import IaCv from "./IaCv.pdf";
import { GiStrikingArrows } from "react-icons/gi";
import mui from "./Images/mui.png";
import { ImHtmlFive2 } from "react-icons/im";
import css from "./Images/css.png";
import html from "./Images/Html.avif";
import git from "./Images/git.webp";
import js from "./Images/javascript.png";
import iajs from "./Images/iako.pdf";
import sass from "./Images/sass.svg";
import react from "./Images/reactjs.png";
import { GiSkills } from "react-icons/gi";
import { BsFillPersonCheckFill } from "react-icons/bs";
const About = () => {
  return (
    <div className="about">
      <div className="about_content">
        <h1 className="main_title">About Me</h1>
        <div
          className="line"
          style={{ width: "100px", marginBottom: "0.5rem" }}
        ></div>
        <div className="line" style={{ width: "50px" }}></div>
        <p className="about_description">
          I'm Ia a passionate{" "}
          <span style={{ color: "#ec1839" }}>React Developer</span>
        </p>
        <p className="description">
          Hi! My name is Ia Popkhadze. I recently graduated from Ivane
          Javakhishvili Tbilisi State University with a degree in Chemistry.
          Although I'm new to React development, I have a strong foundation in
          programming and have been working on personal projects to learn more
          about the language. i have build tons of website that utilized React,
          which helped me understand the power of React and how it can be used
          to create efficient and interactive user interfaces. I'm eager to
          continue learning and gaining experience in the field, and I'm
          confident that my passion for programming and my willingness to learn
          new stuff will gonna help me to grow rapidly in my career.
        </p>
        <div className="personal_info">
          <div className="personal_info_child">
            <p>
              <span>Birthday: </span> 4th January 1998
            </p>
            <p>
              <span>University: </span> Ivane Javakhishvili Tbilisi State
              University
            </p>
            <p>
              <span>Degree: </span> Science/Chemistry
            </p>
            <p>
              <span>Adress: </span> Tbilisi / Isani / Gabriel Salosi Ave 1
            </p>
          </div>
          <div className="personal_info_child">
            <p>
              <span>Age: </span>25
            </p>
            <p>
              <span>Email: </span> iafofkhadze@gmail.com
            </p>
            <p>
              <span>Phone: </span> +995 571 15 30 74{" "}
            </p>
          </div>
        </div>
        <div className="btns_container">
          <a href={IaCv} download target="_blank" className="my_btn">
            Download Cv
          </a>
          <button className="my_btn">Hire Me</button>
        </div>
        <p className="about_description" style={{ marginTop: "5rem" }}>
          COMPLETED COURSES{" "}
          <span>
            <GiStrikingArrows />
          </span>{" "}
        </p>

        <div className="courses_container">
          <div className="each_course_container">
            <div className="image_language">
              <img src={html} alt="" className="language_img" />
              <p className="language">Hypertext Markup Language</p>
            </div>
            <ul>
              <li>{`Bro Code (Youtube)`}</li>
              <li>{`FreeCodeCamp (Youtube)`}</li>
              <li>{` Jonas Schmedtmann's course (Udemy)`}</li>
              <li>{`ჯეოლაბი (Youtube)`}</li>
              <li>
                <a
                  target="_blank"
                  href="https://www.w3schools.com/jsref/jsref_obj_array.asp"
                >
                  w3school.com
                </a>{" "}
                Documentation
              </li>
              <li>{`Challanges`}</li>
            </ul>
          </div>

          <div className="each_course_container">
            <div className="image_language">
              <img src={css} alt="" className="language_img" />
              <p className="language">Cascading Style Sheets</p>
            </div>
            <ul>
              <li>{`SuperSimpleDev (Youtube)`}</li>
              <li>{`FreeCodeCamp (Youtube)`}</li>
              <li>{` Jonas Schmedtmann's course (Udemy)`}</li>
              <li>{`ჯეოლაბი (Youtube)`}</li>
              <li>
                <a
                  target="_blank"
                  href="https://www.w3schools.com/jsref/jsref_obj_array.asp"
                >
                  w3school.com
                </a>{" "}
                Documentation
              </li>
            </ul>
          </div>
          <div className="each_course_container">
            <div className="image_language">
              <img src={sass} alt="" className="language_img" />
              <p className="language">Scss/Sass</p>
            </div>
            <ul>
              <li>{`The Net Ninja (Youtube)`}</li>
              <li>{`Traversy Media (Youtube)`}</li>
            </ul>
          </div>

          <div className="each_course_container">
            <div className="image_language">
              <img
                src={js}
                alt=""
                className="language_img"
                style={{ width: "90px", height: "40px" }}
              />
              <p className="language">Javascript</p>
            </div>
            <ul>
              <li>{`Jonas Schmedtmann (Udemy)`}</li>
              <li>{`Brad Traversy (Udemy)`}</li>
              <li>{`Bro Code (Youtube)`}</li>
              <li>{`w3schools (Documentation)`}</li>
              <li>{`codewars (challanges)`}</li>
              <li>
                <a
                  href={iajs}
                  download
                >{`500 women in tech (Georgian course)`}</a>
              </li>
            </ul>
          </div>
          <div className="each_course_container">
            <div className="image_language">
              <img
                src={react}
                alt=""
                className="language_img"
                style={{ width: "60px" }}
              />
              <p className="language">React.js</p>
            </div>
            <ul>
              <li>{`Dave Gray (Youtube)`}</li>
              <li>{`maximilian schwarzmüller (Udemy)`}</li>
              <li>{`Pedro Tech (Youtube)`}</li>
              <li>{`Bitcamp (Georgian Online Course)`}</li>
            </ul>
          </div>
          <div className="each_course_container">
            <div className="image_language">
              <img src={mui} alt="" className="language_img" />
              <p className="language">Material UI</p>
            </div>
            <ul>
              <li>{`Codevolution (Youtube)`}</li>
              <li>
                <a
                  target="_blank"
                  href="https://mui.com/material-ui/getting-started/overview/"
                >
                  mui.com
                </a>{" "}
                Documentation
              </li>
            </ul>
          </div>

          <div className="each_course_container">
            <div className="image_language">
              <img src={git} alt="" className="language_img" />
              <p className="language">Git/Github</p>
            </div>
            <ul>
              <li>{`Amigoscode (Youtube)`}</li>
              <li>{`FreeCodeCamp (Youtube)`}</li>
              <li>{`Kevin Stratvert (Youtube)`}</li>
            </ul>
          </div>
        </div>

        <p className="about_description" style={{ marginTop: "5rem" }}>
          SKILLS AND PERSONALITIES
        </p>
        <div className="skills_personalities">
          
          <div className="cont">
            <div className="circ"></div>
            <div className="title_container" >
              <GiSkills className="ico" />
              <p>SKILLS</p>
            </div>
            <p >Communication</p>
            <p>Time management</p>
            <p>Problem solving</p>
            <p>Adaptability</p>
            <p>Teamwork</p>
            <p>Analytical thinking</p>
            <p>Attention to detail</p>
          </div>
          <div className="cont">
            <div className="circ"></div>
            <div className="title_container">
              <BsFillPersonCheckFill className="ico" />
              <p>PERSONALITIES</p>
            </div>
            <p>Positive attitude</p>
            <p>Self-motivated</p>
            <p>Responsible</p>
            <p>Confident</p>
            <p>Patient</p>
            <p>Goal-oriented</p>
            <p>Creative</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
