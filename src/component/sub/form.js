import React from "react";
import { Form, Button } from "react-bootstrap";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      source: this.props.source,
      title: null,
      parentState: this.props.parentState,
    };
  }

  updateTitle() {
    if (this.state.source === "heart") {
      this.setState({
        title: "Heart Rate Data",
      });
    } else if (this.state.source === "acc") {
      this.setState({
        title: "Acc Data",
      });
    }
    else if (this.state.source === "gyro") {
      this.setState({
        title: "Gyro Data",
      });
    }
  }

  startDateHandler(event) {
    this.setState({
      startDate: event.target.value,
    });
  }

  endDateHandler(event) {
    this.setState({
      endDate: event.target.value,
    });
  }

  showHeartData(event) {
    event.preventDefault();
    // how to upload child data
    const data = [this.state.startDate, this.state.endDate];
    this.state.parentState(data);
  }

  componentDidMount() {
    this.updateTitle();
  }

  render() {
    return (
      <div>
        <p className="h4"> {this.state.title} </p>
        <Form>
          <Form.Group controlId="start_date">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="datetime-local"
              name="start_date"
              placeholder="Start Date"
              onChange={this.startDateHandler.bind(this)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="end_date" className="space">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="datetime-local"
              name="end_date"
              placeholder="End Date"
              onChange={this.endDateHandler.bind(this)}
            ></Form.Control>
          </Form.Group>
          <br />
          <Button
            className=""
            style={{ width: "100%" }}
            variant="success"
            onClick={this.showHeartData.bind(this)}
          >
            Show Data
          </Button>
        </Form>
      </div>
    );
  }
}

export default InputForm;
