import React from "react";
import "../css/component.css";
import HeartForm from "./sub/heart_form";
import HeartRecordView from "./heart";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      isHeart: false,
    };
    this.showHeartData = this.showHeartData.bind(this);
  }

  showHeartData(data) {
    // data is an array.
    // data[0] = startDate
    // data[1] = endDate
    // data[2] = isHeart

    console.log("showHeartData is called");
    this.setState({
      startDate: data[0],
      endDate: data[1],
      isHeart: data[2],
    });
  }

  render() {
    return (
      // don't add anything in the parent div
      <div>
        <div className="row">
          {/* this is the filtering portion */}
          <div className="col-lg-4 white-col">
            {/* heart */}
            <HeartForm heartState={this.showHeartData}></HeartForm>
          </div>

          <div className="col-lg-4">{/* acc */}</div>

          <div className="col-lg-4">{/* gyro */}</div>
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
