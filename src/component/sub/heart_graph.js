import React from "react";
import CanvasJSReact from "../../assets/canvasjs.react";

class HeartSplineGraph extends React.Component {
  constructor(props) {
    super(props);
    let dataPoints = this.props.data_point;
    this.state = {
      data: dataPoints,
      options: {}
    };
    console.log(this.state.data);
    console.log("----");
  }


  componentDidMount() {
    this.setState({
      options: {
        zoomEnabled: true,
        animationEnabled: true,
        title: {
          text: "Heart Rate",
        },
        axisX: {
          title: "Time",
          gridThickness: 1,
          labelAngle: -90,
          valueFormatString: "hh:mm:ss"
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
      }
    })

  }

  render() {
    const CanvasJS = CanvasJSReact.CanvasJS;
    const CanvasJSChart = CanvasJSReact.CanvasJSChart;

    return (
      <div>
        <CanvasJSChart
          options={this.state.options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default HeartSplineGraph;
