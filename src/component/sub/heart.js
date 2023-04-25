import "./../../css/App.css";
import React from "react";
import CanvasJSReact from "../../assets/canvasjs.react";

class HeartRecordView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: null,
      data: [],
      startDate: new Date(this.props.startDate) / 1000,
      endDate: new Date(this.props.endDate) / 1000,
      errorMessage: null,
      isError: false,
    };
  }

  getData() {
    const url =
      "http://172.105.117.206:9889/api/records/?choice=heart&start_date=" +
      this.state.startDate +
      "&end_date=" +
      this.state.endDate;

    const requestOptions = {
      method: "GET",
      credentials: "same-origin",
    };

    fetch(url, requestOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          let payload = result["payload"];
          let fabrication = []; // this will be added on state.

          for (let i = 0; i < payload.length; i++) {
            const created_on = new Date(payload[i]["created_on"]);

            fabrication.push({
              x: created_on.getTime(),
              y: payload[i]["heart"],
            });
          }
          if (fabrication.length !== 0) {
            this.setState({
              data: fabrication,
              rrorMessage: null,
              isError: false,
            });
          } else {
            this.setState({
              errorMessage: "There's not enough data to draw a graph!",
              isError: true,
            });
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const options = {
      zoomEnabled: true,
      animationEnabled: true,
      title: {
        text: "Heart Rate",
      },
      axisX: {
        title: "Time",
        gridThickness: 1,
        labelAngle: -90,
        valueFormatString: "hh:mm:ss",
      },
      axisY: {
        title: "Heart Rate (in BPM)",
      },
      data: [
        {
          type: "area",
          xValueType: "dateTime",
          dataPoints: this.state.data,
        },
      ],
    };
    // const CanvasJS = CanvasJSReact.CanvasJS;
    const CanvasJSChart = CanvasJSReact.CanvasJSChart;

    return (
      <div>
        <hr style={{ height: "5px", backgroundColor: "white" }} />
        {this.state.isError && (
          <div className="row">
            <p className="h5" style={{ color: "whitesmoke" }} align="center">
              There's not enough data!
            </p>
          </div>
        )}

        {!this.state.isError && (
          <CanvasJSChart
            options={options}
            /* onRef={ref => this.chart = ref} */
          ></CanvasJSChart>
        )}
      </div>
    );
  }
}

export default HeartRecordView;
