import "./../../css/App.css";
import React from "react";
import TableView from "../tableview";

class RecordView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      startDate: new Date(this.props.startDate) / 1000,
      endDate: new Date(this.props.endDate) / 1000,
      source: this.props.source,
      errorMessage: null,
      isError: false,
    };
  }

  getData() {
    const url =
      "https://hello.ibtehaz.xyz/api/records/?choice=" +
      this.state.source +
      "&start_date=" +
      this.state.startDate +
      "&end_date=" +
      this.state.endDate;

    const requestOptions = {
      method: "GET",
    };

    fetch(url, requestOptions)
      .then((res) => Promise.all([res.status, res.json()]))
      .then(
        ([status, result]) => {
          if (status === 200) {
            let payload = result["payload"];

            if (payload.length !== 0) {
              this.setState({
                data: payload,
                errorMessage: null,
                isError: false,
              });
            } else {
              this.setState({
                errorMessage: "There's not enough data!",
                isError: true,
              });
            }
          } else {
            this.setState({
              errorMessage: result.message,
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
                {this.state.source === "acc" && (
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Acc X</th>
                    <th scope="col">Acc Y</th>
                    <th scope="col">Acc Z</th>
                    <th scope="col">Logged At</th>
                  </tr>
                )}

                {this.state.source === "gyro" && (
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Gyro X</th>
                    <th scope="col">Gyro Y</th>
                    <th scope="col">Gyro Z</th>
                    <th scope="col">Logged At</th>
                  </tr>
                )}
              </thead>

              <tbody>
                {this.state.data.map((value, index) => {
                  return (
                    <TableView
                      entry={value}
                      key={index}
                      source={this.state.source}
                    ></TableView>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default RecordView;
