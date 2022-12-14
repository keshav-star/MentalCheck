import React from "react";
import '../App.css';
import { Link } from "react-router-dom";
import { Accordion,Button, Card } from 'react-bootstrap';

const Welcome = () => {


    return (

        <div className="container">
            <Accordion>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why depression is tough to cure</Accordion.Header>
                    <Accordion.Body>
                    Depressive disorder affects 1-6% of adolescents each year worldwide, 
                    and early onset heralds a more severe and persistent illness in adult
                    life.Effective treatment is available, but best treatment practice is
                    controversial because of concerns about the use of antidepressants in
                    young people and inconsistencies in evidence.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Can we prevent or delay onset of depression in 
                    adolescents?</Accordion.Header>
                    <Accordion.Body>
                    Given the serious burden of depression, the poor prognosis when onset
                    is early, and the limited treatment options available, it is increasingly
                    being argued that preventing, or at least delaying, the onset of 
                    depression in children and adolescents is a major public health and
                    clinical priority 
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className="cards">
            <Card >
                <Card.Body>
                    <Card.Title> Book An Appointment</Card.Title>
                    <Card.Text>
                        Fill a quick form to book an appointment with one of our expertise Psychatrist.
                    </Card.Text>
                    <Link to="/appointment"> <Button variant="primary">Click Here</Button></Link>
                </Card.Body>
            </Card>
            <Card >
                <Card.Body>
                    <Card.Title>Take a Simple Test</Card.Title>
                    <Card.Text>
                        Take this very simple test which will check your mental and psychological health
                    </Card.Text>
                    <Link to="/details">
                        <Button variant="primary">Click Here</Button>
                    </Link>
                </Card.Body>
            </Card>
            <Card >
                <Card.Body>
                    <Card.Title>Chat with stranger</Card.Title>
                    <Card.Text>
                        Chat with a person of specialized panel and share to them about your problems and  situation in life
                    </Card.Text>
                    <Link to="/chat"> 
                    <Button variant="primary">Click Here</Button>
                    </Link>
                </Card.Body>
            </Card>
            </div>
        </div >

    )
};

export default Welcome;