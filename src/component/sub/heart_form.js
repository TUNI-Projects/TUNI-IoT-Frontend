import React from "react";
import { Form, Button } from "react-bootstrap";


class HeartForm extends React.Component {

    render() {
        return (
            <div>
                <p className="h4"> Heart Rate Data </p>
                <Form>
                    <Form.Group controlId="start_date">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control type="date" name="start_date" placeholder="Start Date"></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="end_date" className="space">
                        <Form.Label>End Date</Form.Label>
                        <Form.Control type="date" name="end_date" placeholder="End Date"></Form.Control>
                    </Form.Group>
                    <br />
                    <Button className="" variant="success" type="submit">
                        Show Data
                    </Button>
                </Form>
            </div>
        )
    }
}

export default HeartForm;