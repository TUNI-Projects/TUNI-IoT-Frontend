import "./../css/App.css";
import React from "react";
import HeartSplineGraph from "./sub/heart_graph";

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
            data: [...this.state.data, fabrication],
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
    return (
      <div className="row">
        <HeartSplineGraph data_point={this.state.data}></HeartSplineGraph>
      </div>
    );
  }
}

export default HeartRecordView;
