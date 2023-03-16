import React from "react";
import Img from "../Home/iachka.PNG";
import { useState } from "react";
const Portfolio = () => {

  const portfolioList = [
    {
      id: 1,
      image: "",
      title: "",
      link: "",
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
                    <img src={Img} alt="{name}" />
                    <h2>'xzxzx</h2>
                  </div>
                  <div className="back">
                    <div className="buttons_container">
                      <a className="project" href="#">See Project</a>
                      <a className="code" href="#">See Source Code</a>
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
