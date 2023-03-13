import React from "react";

const Portfolio = () => {
  const portfolioList=[{
    id:1,
    image:'',
    title:'',
  }]
  return (
    <div className="portfolioo">
      <div className="portfolioo_content">
        <h1 className="main_title">Portfolio</h1>
        <div
          className="line"
          style={{ width: "100px", marginBottom: "0.5rem" }}
        ></div>
        <div className="line" style={{ width: "50px" }}></div>
      </div>
    </div>
  );
};

export default Portfolio;
