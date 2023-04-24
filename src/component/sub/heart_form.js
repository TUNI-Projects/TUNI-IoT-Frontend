import React from "react";
import { Form, Button } from "react-bootstrap";

class HeartForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: null,
      end_date: null,
    };
  }

  start_date_handler(event) {
    this.setState({
      start_date: event.target.value,
    });
  }

  end_date_handler(event) {
    this.setState({
      end_date: event.target.value,
    });
  }

  showHeartData(event) {
    event.preventDefault();
    // how to upload child data
  }


  render() {
    console.log(this.state.start_date);
    console.log(this.state.end_date);
    return (
      <div>
        <p className="h4"> Heart Rate Data </p>
        <Form>
          <Form.Group controlId="start_date">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="datetime-local"
              name="start_date"
              placeholder="Start Date"
              onChange={this.start_date_handler.bind(this)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="end_date" className="space">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="datetime-local"
              name="end_date"
              placeholder="End Date"
              onChange={this.end_date_handler.bind(this)}
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

export default HeartForm;
