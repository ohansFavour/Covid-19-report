import React from "react";
import {connect} from "react-redux";
import Table from "react-bootstrap/Table";

import { selectData, selectDataLoading } from "../../redux/selectors";

import "./states.scss";

const States = (props) => {

    const data = props.coronaData.data.states;
  return (
    <div className="states__container">
      <Table striped bordered hover>
        <thead>
            <tr>
            <th>States</th>
            <th>Confirmed Cases</th>
            <th>Cases on Admission</th>
            <th>Discharged</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
         {data.map(eachState=>(
            <tr key={eachState._id}>
            <td>{eachState.state}</td>
            <td>{eachState.confirmedCases}</td>
            <td>{eachState.casesOnAdmission}</td>
            <td>{eachState.discharged}</td>
            <td>{eachState.death}</td>
          </tr>
         ))} 
        </tbody>
      </Table>
    </div>
  );
};
const mapStateToProps = (state) => ({
  coronaData: selectData(state),
  isLoading: selectDataLoading(state),
});

export default connect(mapStateToProps)(States);
