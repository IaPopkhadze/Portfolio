import React from "react";
import Img from "../Home/iachka.PNG";
import { useState } from "react";
import Cv from "./Images/cv.PNG";
import Hotel from "./Images/hotel.PNG";
import Todo from "./Images/todo.PNG";
import Interier from "./Images/interier.PNG";
import Calculator from "./Images/calculator.PNG";
import Guess from "./Images/guess.PNG";
import Travel from "./Images/travel.PNG";
import Questions from "./Images/questions.PNG";
import Shopping from "./Images/shopping.PNG";
import Restaurant from "./Images/restaurant.PNG";
const Portfolio = () => {
  const portfolioList = [
    {
      image: Cv,
      title: "Cv Generator",
      project: "https://cv-generator-pied.vercel.app/",
      github:'https://github.com/IaPopkhadze/cv-generator'
    },
    {
      image: Hotel,
      title: "Hotel",
      project: "https://tiflisi-palace.vercel.app/",
      github:'https://github.com/IaPopkhadze/Tiflisi-Palace'
    },
    {
      image: Questions,
      title: "Questions",
      project: "https://questions-sigma.vercel.app/redberry",
      github:'https://github.com/IaPopkhadze/Questions'
    },
    {
      image: Todo,
      title: "Todo List",
      project: "https://todo-list-three-silk.vercel.app/",
      github:'https://github.com/IaPopkhadze/Todo-List'
    },
    {
      image: Interier,
      title: "Interier",
      project: "https://interier.vercel.app/",
      github:'https://github.com/IaPopkhadze/Interier'
    },
    {
      image: Calculator,
      title: "Calculator",
      project: "https://calculator-app-omega-ten.vercel.app/",
      github:'https://github.com/IaPopkhadze/Calculator'
    },
    {
      image: Guess,
      title: "Guess The Number",
      project: "https://guess-the-number-eta-liard.vercel.app/",
      github:'https://github.com/IaPopkhadze/Guess-the-number'
    },
    {
      image: Travel,
      title: "Travel",
      project: "https://travel-black-phi.vercel.app/",
      github:'https://github.com/IaPopkhadze/Travel'
    },
    {
      image: Shopping,
      title: "Shopping",
      project: "https://e-commerce-uss4.vercel.app/",
      github:'https://github.com/IaPopkhadze/E-commerce'
    },    {
      image: Restaurant,
      title: "Shopping",
      project: "https://restaurant-five-lyart.vercel.app/",
      github:'https://github.com/IaPopkhadze/Restaurant'
    },
    

  ];
  return (
    <div className="portfolioo">
      <div className="portfolioo_content">
        <h1 className="main_title">Portfolio</h1>
        <div
          className="line"
          style={{ width: "100px", marginBottom: "0.5rem" }}
        ></div>
        <div className="line" style={{ width: "50px" }}></div>
        <div className="portfolio_container">
          {portfolioList.map((card) => {
            return (
              <div className="card-container">
                <div className="card">
                  <div className="front">
                    <img src={card.image} alt="{name}" />
                    <h2>{card.title}</h2>
                  </div>
                  <div className="back">
                    <div className="buttons_container">
                      <a className="project" target='_blank' href={card.project}>
                        See Project
                      </a>
                      <a className="code" target='_blank' href={card.github}>
                        See Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
