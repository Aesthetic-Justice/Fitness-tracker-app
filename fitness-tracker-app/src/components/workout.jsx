import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Container, ListGroup } from 'react-bootstrap';
import WorkoutType from './WorkoutType';

function WorkoutForm(sets) {
  let WorkoutArray = [];
  let num=0;
  for(const iterator of sets.sets){
      num++;
      WorkoutArray.push(<WorkoutType data={iterator} key={num}/>)
  }

  return (
    <Container fluid>
      <Form>
        <Row className="m-b3">
          <Col >
            <ListGroup>
              {WorkoutArray}
            </ListGroup>
          </Col>

          <Col >
            <FloatingLabel controlId="floatingSelect" label="Enter the name of your workout">
              <Form.Control type="textarea" placeholder="Enter the name of your workout" />
            </FloatingLabel>
          </Col>

          <Col >
            <FloatingLabel controlId="floatingSelect" label="Date">
              <Form.Control type="date" placeholder="Date" />
            </FloatingLabel>
          </Col>
        </Row>


        <Row className="mb-3">
          <Col >
            <FloatingLabel controlId="floatingSelect" label="Sets (1-10)">
              <Form.Select aria-label="Floating label select example">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option>N/A</option>
              </Form.Select>
            </FloatingLabel>
          </Col>

          <Col >
            <FloatingLabel controlId="floatingSelect" label="Reps (1-10)">
              <Form.Select aria-label="Floating label select example">

                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option>N/A</option>
              </Form.Select>
            </FloatingLabel>
          </Col>

          <Col >
            <FloatingLabel controlId="floatingSelect" label="Duration">
              <Form.Control type="textarea" placeholder="Enter the name of your workout" />
            </FloatingLabel>
          </Col>

        </Row>


        {/* 
      <Row className="mb-3">
      
      <Col >
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Intensity</Form.Label>
        <Form.Control placeholder="Please enter your intensity" />
      </Form.Group>
      </Col>
      <Col >
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Target</Form.Label>
          <Form.Control />
        </Form.Group>
        </Col>
      </Row> */}


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default WorkoutForm;