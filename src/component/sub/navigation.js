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
            {" "}
            Heart Data
          </p>
        </div>

        <div className="col-md-4" onClick={this.handleAccClick.bind(this)}>
          <p
            className={this.state.heartActive ? "h2 focus entry" : "h2 entry"}
            align="center"
          >
            Acc Data
          </p>
        </div>

        <div className="col-md-4" onClick={this.handleGyroClick.bind(this)}>
          <p
            className={this.state.heartActive ? "h2 focus entry" : "h2 entry"}
            align="center"
          >
            Gyro Data
          </p>
        </div>
      </div>
    );
  }
}

export default Navigation;
