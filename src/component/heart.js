import "./../css/App.css";
import React from "react";
import CanvasJSReact from "../assets/canvasjs.react";

class HeartRecordView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: null,
      data: [],
    };
  }

  getData() {
    const url =
      "http://172.105.117.206:9889/api/records/?choice=heart&start_date=1681925942&end_date=1681927200";
    console.log(url);
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

          this.setState({
            data: fabrication,
          });
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
      <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        ></CanvasJSChart>
    );
  }
}

export default HeartRecordView;
