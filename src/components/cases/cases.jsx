import React from "react";
import CountUp from "react-countup";
import PropTypes from "prop-types";

import "./cases.scss";

const Cases = ({ img, alt, value, title, color }) => {
  return (
    <div className="cases__container" data-test="case-test">
      <div className="cases__image">
        <img src={img} alt={alt} />
      </div>{" "}
      <div className="cases__details">
        <div className="count">
          <CountUp end={value} start={0} duration={13.65} />
        </div>
        <div className="title" style={{ color: `${color}` }}>
          {title}
        </div>
      </div>
    </div>
  );
};
Cases.propTypes = {
  img: PropTypes.any,
  alt: PropTypes.string,
  value: PropTypes.number,
  title: PropTypes.string,
  color: PropTypes.string,
};
export default Cases;
