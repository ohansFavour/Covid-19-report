import React from "react";

import Introduction from "../../containers/introduction/introduction";
import Report from "../../containers/report/report";
import States from "../../containers/states/states";

import "./homePage.scss";

const HomePage = () => {
  return (
    <div className="homepage__container">
      <Introduction />
      <h2 align="center" className="report__header">
        Report
      </h2>
      <Report />
      <h2 align="center" className="report__header">
        Statistics By State
      </h2>
      <States />
    </div>
  );
};

export default HomePage;
