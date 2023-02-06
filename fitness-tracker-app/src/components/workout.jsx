import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import { Container, ListGroup } from "react-bootstrap";
import WorkoutType from "./WorkoutType";

function WorkoutForm(sets) {
  let WorkoutArray = [];
  let num = 0;
  for (const iterator of sets.sets) {
    num++;
    WorkoutArray.push(<WorkoutType data={iterator} key={num} />);
  }

  const PushWorkout = (e) => {
    e.preventDefault();
    const submission = {
      sets: [],
      date: "",
    };
    const selectedSets = document.getElementsByClassName("active");
    for (const iterator of selectedSets) {
      submission.sets.push(iterator.innerHTML);
    }
    const selectedDate = document.getElementById("floatingSelect").value;
    submission.date = selectedDate;
    console.log(submission);
  };

  return (
    <Container fluid>
      <Form>
        <Row className="m-b3">
          <Col>
            <ListGroup>
              <ListGroup.Item disabled>
                Click to Select your Sets
              </ListGroup.Item>
              {WorkoutArray}
            </ListGroup>
          </Col>

          <Col>
            <FloatingLabel controlId="floatingSelect" label="Select Date">
              <Form.Control type="date" />
            </FloatingLabel>
          </Col>
        </Row>

        <Button variant="primary" type="submit" onClick={PushWorkout}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default WorkoutForm;
