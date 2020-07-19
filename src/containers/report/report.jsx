import React from "react";
import { connect } from "react-redux";

import Cases from "../../components/cases/cases";
import { selectData, selectDataLoading } from "../../redux/selectors";
import Covid from "../../assets/images/corona.png";
import Masked from "../../assets/images/masked-man.png";

import "./report.scss";

const Report = (props) => {
  const {
    death,
    discharged,
    totalActiveCases,
    totalConfirmedCases,
    totalSamplesTested,
  } = props.coronaData.data;
  return (
    <div className="report">
      <div className="report__details">
        <div>
          <Cases
            img={Covid}
            alt="coronavirus"
            value={Number(totalSamplesTested)}
            title="Total Samples Tested"
            color="blue"
          />
          <Cases
            img={Covid}
            alt="coronavirus"
            value={Number(totalConfirmedCases)}
            title="Total Number of confirmed cases"
            color="gold"
          />
          <Cases
            img={Covid}
            alt="coronavirus"
            value={Number(totalActiveCases)}
            title="Total Active Cases"
            color="green"
          />

          <Cases
            img={Covid}
            alt="coronavirus"
            value={Number(discharged)}
            title="Total Discharged"
            color="teal"
          />
          <Cases
            img={Covid}
            alt="coronavirus"
            value={Number(death)}
            title="Total Deaths"
            color="red"
          />
        </div>
      </div>
      <div className="report__image">
        <div>
          <img src={Masked} alt="facemask__corona" />
          <h5 align="center">Stay safe, these numbers are real!</h5>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  coronaData: selectData(state),
  isLoading: selectDataLoading(state),
});

export default connect(mapStateToProps)(Report);
