import "./../../css/App.css";
import React from "react";
import CanvasJSReact from "../../assets/canvasjs.react";

class HeartRecordView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      startDate: new Date(this.props.startDate) / 1000,
      endDate: new Date(this.props.endDate) / 1000,
      errorMessage: null,
      isError: false,
    };
  }

  getData() {
    const url =
      "https://hello.ibtehaz.xyz/api/records/?choice=heart&start_date=" +
      this.state.startDate +
      "&end_date=" +
      this.state.endDate;

    const requestOptions = {
      method: "GET",
      credentials: "same-origin",
    };

    fetch(url, requestOptions)
      .then((res) => Promise.all([res.status, res.json()]))
      .then(
        ([status, result]) => {
          if (status === 200) {
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
          } else {
            console.log(result);
            this.setState({
              errorMessage: result["message"],
              isError: true,
            });
          }
        },
        (error) => {
          this.setState({
            errorMessage: error.message,
            isError: true,
          });
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
        <hr style={{ height: "3px", backgroundColor: "white" }} />
        {this.state.isError && (
          <div className="row">
            <p className="h5" style={{ color: "whitesmoke" }} align="center">
              {this.state.errorMessage}
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
