import React from "react";

import Covid19 from "../../assets/images/covid.jpg";

import "./introduction.scss";

const Introduction = () => {
  return (
    <div className="introduction__container">
      <img src={Covid19} alt="corona-virus" />
      <div className="introduction__content">
        <p>
          Covid19 is a pneumonia-like disease that was first identified in
          Wuhan, China. The disease is caused by a new coronavirus, named
          SARS_CoV-2, that is similar to the Severe Acute Respiratory Syndrome
          (SARS) virus. Since entering Nigeria, this pandemic has been on the rise. Here is a
          detailed report of Covid-19 in Nigeria
        </p>
      </div>
    </div>
  );
};

export default Introduction;
