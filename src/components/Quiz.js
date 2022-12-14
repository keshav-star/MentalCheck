import React, { useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

export default function Quiz() {
    const [qn, setQn] = useState(0)
    const [score, setScore] = useState(0);
    const [showResult, setResult] = useState(false);

    const optClicked = (resp) => {
        if (resp) {
            setScore(score + 1);
        }
        if (qn + 1 < qns.length) setQn(qn + 1);
        else setResult(true)
    }
    const restart = () => {
        setQn(0);
        setResult(false);
        setScore(0)
    }

    const qns = [
        "Are you losing interest or pleasure in doing things?",
        "Are you feeling down, depressed or hopeless without knowing reason?",
        "Are you having trouble falling or staying asleep, or sleeping too much?",
        "Are you having trouble concentrating in studying or daily works?",
        "Are you losing appetite or eating too much?",
        "Are you thinking that you would be better off dead, or of hurting yourself in some way?",
        "Are you getting annoyed or irritated on simple things?",
        "Are you having trust issues with everyone around you?",
        "Have you been feeling uninterested in things you felt were important before?",
        "Are you feeling tired or fatigued at end of day?",
        "Have you felt been left alone by people again and again?",
        "Do you feel joy in your life has left no meaning?",
        "Are you feeling less and less energetic each day?",
        "Do you feel it hard to express yourself to people a lot?",
        "Are you getting talkative than before?"
    ];

    return (
        <div className="quiz">
            {showResult ?
                <div className="result">

                    {score > 10 ?
                        <div className='doc'>
                            <span>You Need a Doctor</span>
                            <p>Please Fill this form to take an appointment<LinkContainer to="/appointment">
                                <Button variant="primary" className='aptbutton'>Click Here</Button></LinkContainer></p>
                        </div> :
                        <div className="tips">
                            <h2>Please Follow these tips to Calm yourself And you will be fine</h2>
                            <p>Take Deep breath</p>
                            <p>Drink some water</p>
                            <p>Talk with someone important</p>
                            <p>Give yourself a break to tour </p>
                            <p> visit to a calm place like temple etc.</p>
                        </div>
                    }
                    <Button variant="warning" className='restartButton' onClick={restart}>restart</Button>
                </div> :
                <div className="questions">
                    <h1>{qn + 1} of {qns.length} Answered </h1>
                    <div className="qncard">
                        <h2 className="qn">{qns[qn]}</h2>
                        <ul>
                            <li onClick={() => optClicked(1)}>Y E S</li>
                            <li onClick={() => optClicked(0)}>N O</li>
                        </ul>
                    </div>
                </div>
            }

        </div>
    )
}

// let styles=(StyleSheet)=>{}