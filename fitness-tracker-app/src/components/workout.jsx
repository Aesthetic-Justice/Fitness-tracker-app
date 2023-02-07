import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import { Container, ListGroup } from "react-bootstrap";
import WorkoutType from "./WorkoutType";

import { useMutation } from '@apollo/client';
import { CREATEWORKOUT } from '../utils/mutations';

function WorkoutForm(sets) {
  let WorkoutArray = [];
  let num = 0;
  for (const iterator of sets.sets) {
    num++;
    WorkoutArray.push(<WorkoutType data={iterator} key={num} />);
  }

  const [createWorkout] = useMutation(CREATEWORKOUT);

  const PushWorkout = async (e) =>{
    //prevent page from refreshing
    e.preventDefault();

    //create data object for creating a "workout"
    const submission = {
      sets:[

      ],
      //Grabs the date set by the user
      date:document.getElementById('floatingSelect').value
    };

    //Grabs all the user selected workouts on the page
    const selectedSets = document.getElementsByClassName('active');
    for(const iterator of selectedSets){
      //Adds them to the submission data object
      submission.sets.push(iterator.innerHTML);
    }

    try{
      createWorkout({
        variables: {
          date: submission.date,
          sets: submission.sets
        }
      });
    } catch (err){
      console.error(err);
    }
  }

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
