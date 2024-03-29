import React from "react";
import "../css/component.css";
import InputForm from "./sub/form";
import HeartRecordView from "./sub/heart";
import Navigation from "./sub/navigation";
import RecordView from "./sub/record";
import { WebSocketDemo } from "./socket/fetcher";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      // these values are for graph
      isHeart: false,
      isAcc: false,
      isGyro: false,
      // these values are for input form
      showHeart: true,
      showGyro: false,
      showAcc: false,

      // live data
      liveData: null,
    };
    this.showHeartData = this.showHeartData.bind(this);
    this.showAccData = this.showAccData.bind(this);
    this.showGyroData = this.showGyroData.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  showForm(state) {
    if (state === "heart") {
      this.setState({
        showHeart: true,
        showGyro: false,
        showAcc: false,
      });
    } else if (state === "acc") {
      this.setState({
        showHeart: false,
        showGyro: false,
        showAcc: true,
      });
    } else if (state === "gyro") {
      this.setState({
        showHeart: false,
        showGyro: true,
        showAcc: false,
      });
    }
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

  onDataReceived = (payload) => {
    // console.log("Received data from WebSocketDemo:", data);
    // Do something with the received data
    const data = JSON.parse(payload.data);
    this.setState({
      liveData: data,
    });
  };

  render() {
    return (
      // don't add anything in the parent div
      <div>
        {/* --------- */}
        {/* this only initiates and run the web socket. */}
        <WebSocketDemo onDataReceived={this.onDataReceived} />
        {/* -------- */}
        <Navigation
          status={this.showForm}
          liveData={this.state.liveData}
        ></Navigation>
        <hr
          style={{
            height: "3px",
            backgroundColor: "white",
          }}
        />
        {/* ---------------------------------------- */}

        <div className="row" style={{ paddingTop: "5px" }}>
          <div className="col-md-3"></div>
          <div className="col-md-6 white-col">
            {this.state.showHeart && (
              <InputForm
                parentState={this.showHeartData}
                source="heart"
              ></InputForm>
            )}

            {this.state.showAcc && (
              <InputForm
                parentState={this.showAccData}
                source="acc"
              ></InputForm>
            )}
            {this.state.showGyro && (
              <InputForm
                parentState={this.showGyroData}
                source="gyro"
              ></InputForm>
            )}
          </div>
          <div className="col-md-3"></div>
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

          {this.state.isAcc && (
            <div
              className=""
              style={{ paddingTop: "10px", paddingBottom: "20px" }}
            >
              <RecordView
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                source={"acc"}
              ></RecordView>
            </div>
          )}

          {this.state.isGyro && (
            <div
              className=""
              style={{ paddingTop: "10px", paddingBottom: "20px" }}
            >
              <RecordView
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                source={"gyro"}
              ></RecordView>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Dashboard;
