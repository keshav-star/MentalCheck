import { Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
// import { useRef } from 'react';


function Details() {
    // const formData = useRef(null);
    return (
        <Form  >
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAge">
                <Form.Label>Age</Form.Label>
                <Form.Control type="text" placeholder="Enter Age" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicJob">
                <Form.Label>Occupation</Form.Label>
                <Form.Control type="text" placeholder="Enter Occupation" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>City</Form.Label>
                <Form.Control type="address" placeholder="Your Address" />
            </Form.Group>
            <Link to="/quiz"> <Button variant="primary">Submit</Button></Link>
        </Form>
    );
}

export default Details;