import "./../../css/App.css";
import React from "react";
import TableView from "../tableview";

class AccRecordView extends React.Component {
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
      "http://172.105.117.206:9889/api/records/?choice=acc&start_date=" +
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

          if (payload.length !== 0) {
            this.setState({
              data: payload,
              errorMessage: null,
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
    return (
      <div>
        <hr style={{ height: "3px", backgroundColor: "white" }} />
        {this.state.isError && (
          <div className="row">
            <p className="h5" style={{ color: "whitesmoke" }} align="center">
              There's not enough data!
            </p>
          </div>
        )}

        {!this.state.isError && (
          <div
            style={{
              backgroundColor: "white",
              height: "350px",
              overflow: "scroll",
            }}
          >
            <table className="table">
              <thead
                style={{
                  position: "sticky",
                  top: "0px",
                  backgroundColor: "#1E1F25",
                  color: "whitesmoke",
                }}
              >
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Acc X</th>
                  <th scope="col">Acc Y</th>
                  <th scope="col">Acc Z</th>
                  <th scope="col">Logged At</th>
                </tr>
              </thead>

              <tbody>
                {this.state.data.map((value, index) => {
                  return <TableView entry={value} key={index}></TableView>;
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default AccRecordView;
