import React from "react";
import "../css/component.css";
import InputForm from "./sub/form";
import HeartRecordView from "./heart";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      isHeart: false,
      isAcc: false,
      isGyro: false,
    };
    this.showHeartData = this.showHeartData.bind(this);
    this.showAccData = this.showAccData.bind(this);
    this.showGyroData = this.showGyroData.bind(this);
  }

  showHeartData(data) {
    // data is an array.
    // data[0] = startDate
    // data[1] = endDate
    console.log("showHeartData is called");
    this.setState({
      startDate: data[0],
      endDate: data[1],
      isHeart: true,
      isAcc: false,
      isGyro: false,
    });
  }

  showAccData(data) {
    // data is an array.
    // data[0] = startDate
    // data[1] = endDate
    this.setState({
      startDate: data[0],
      endDate: data[1],
      isAcc: true,
      isHeart: false,
      isGyro: false,
    });
    console.log("showAccData");
  }

  showGyroData(data) {
    // data is an array.
    // data[0] = startDate
    // data[1] = endDate
    this.setState({
      startDate: data[0],
      endDate: data[1],
      isAcc: false,
      isHeart: false,
      isGyro: true,
    });
    console.log("showGyroData");
  }

  render() {
    return (
      // don't add anything in the parent div
      <div>
        <div className="row">
          {/* this is the filtering portion */}
          <div className="col-md-4 white-col">
            {/* heart */}
            <InputForm
              parentState={this.showHeartData}
              source="heart"
            ></InputForm>
          </div>

          <div className="col-md-4 white-col">
            {/* acc */}
            <InputForm
              parentState={this.showAccData}
              source="acc"
            ></InputForm>
            </div>

          <div className="col-md-4 white-col"> 
          {/* gyro */}
          <InputForm
              parentState={this.showGyroData}
              source="gyro"
            ></InputForm>
          </div>
        </div>

        <div className="row">
          {/* portion where i am going to show data */}
          {this.state.isHeart && (
            <div
              className=""
              style={{ paddingTop: "10px", paddingBottom: "20px" }}
            >
              <HeartRecordView
                startDate={this.state.startDate}
                endDate={this.state.endDate}
              ></HeartRecordView>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Dashboard;
