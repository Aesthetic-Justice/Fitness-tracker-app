import { ListGroup } from 'react-bootstrap';

const WorkoutType = (data) => {
    const setSelected = event => {
        if (event.target.className === 'list-group-item list-group-item-action') {
            event.target.className = 'list-group-item list-group-item-action active';
        } else {
            event.target.className = 'list-group-item list-group-item-action';
        };
    }

    return (
        <ListGroup.Item action onClick={setSelected}>
            {data.data.name}
        </ListGroup.Item>
    )
}

export default WorkoutType;