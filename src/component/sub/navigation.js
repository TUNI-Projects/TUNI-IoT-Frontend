import React from "react";
import "../../css/component.css";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heartActive: false,
      gyroActive: false,
      accActive: false,
      parentStatus: this.props.status,
      liveData: this.props.liveData,
    };
  }

  handleHeartClick(event) {
    this.setState({
      heartActive: true,
      gyroActive: false,
      accActive: false,
    });
    this.state.parentStatus("heart");
  }

  handleAccClick(event) {
    this.setState({
      heartActive: false,
      gyroActive: false,
      accActive: true,
    });
    this.state.parentStatus("acc");
  }

  handleGyroClick(event) {
    this.setState({
      heartActive: false,
      gyroActive: true,
      accActive: false,
    });
    this.state.parentStatus("gyro");
  }

  componentDidMount() {
    this.setState({
      heartActive: true,
      gyroActive: false,
      accActive: false,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.liveData !== this.props.liveData) {
      this.setState({
        liveData: this.props.liveData,
      });
    }
  }

  timeThingy(timestamp) {
    return new Date(timestamp * 1000).toLocaleString("en-GB");
  }

  render() {
    return (
      <div
        className="row"
        style={{ color: "whitesmoke", paddingBottom: "20px" }}
      >
        <div className="col-md-4" onClick={this.handleHeartClick.bind(this)}>
          <p
            className={this.state.heartActive ? "h2 focus entry" : "h2 entry"}
            align="center"
          >
            Heart Data
          </p>

          {this.state.liveData && (
            <div className="row">
              <div style={{ marginTop: "20px" }}> </div>
              <p> Last Heart Rate: {this.state.liveData.heart}</p>
              <p>
                {" "}
                Last Fetched At:{" "}
                {this.timeThingy(this.state.liveData.created_on)}
              </p>
            </div>
          )}
        </div>

        <div className="col-md-4" onClick={this.handleAccClick.bind(this)}>
          <p
            className={this.state.heartActive ? "h2 focus entry" : "h2 entry"}
            align="center"
          >
            Acc Data
          </p>

          {this.state.liveData && (
            <div className="row">
              <div style={{ marginTop: "20px" }}> </div>
              <p>
                Last Acc Data: [ x: {this.state.liveData.acc.x}, y:{" "}
                {this.state.liveData.acc.y}, z: {this.state.liveData.acc.z} ]
              </p>
              <p>
                {" "}
                Last Fetched At:{" "}
                {this.timeThingy(this.state.liveData.created_on)}
              </p>
            </div>
          )}
        </div>

        <div className="col-md-4" onClick={this.handleGyroClick.bind(this)}>
          <p
            className={this.state.heartActive ? "h2 focus entry" : "h2 entry"}
            align="center"
          >
            Gyro Data
          </p>

          {this.state.liveData && (
            <div className="row">
              <div style={{ marginTop: "20px" }}> </div>
              <p>
                Last Gyro Data: [ x: {this.state.liveData.gyro.x}, y:{" "}
                {this.state.liveData.gyro.y}, z: {this.state.liveData.gyro.z} ]
              </p>
              <p>
                {" "}
                Last Fetched At:{" "}
                {this.timeThingy(this.state.liveData.created_on)}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Navigation;
