import React from "react";
import CountUp from "react-countup";


import "./cases.scss";

const Cases = ({ img, alt, value, title, color, delay }) => {
  return (
    <div className="cases__container">
      <div className="cases__image">
        <img src={img} alt={alt} />
      </div>{" "}
      <div className="cases__details">
        <div className="count">
          <CountUp end={value} start={0} duration={13.65} />
        </div>
        <div className="title" style={{ color: `${color}`}}>{title}</div>
      </div>
    </div>
  );
};

export default Cases;
