import React, { useState } from "react";
import { Form, Button, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
// import { useUserAuth } from "../authContext";
import PhoneInput from 'react-phone-number-input';


const PhoneAppoint = () => {
    const [number, setNumber] = useState("")
    // const [error, setError] = useState("");
    const [otp, setOtp] = useState("");
    const [result, setResult] = useState("");
    // const [flag, setFlag] = useState(false);
    // const { setUpRecaptha } = useUserAuth();
    const navigate = useNavigate();

    const getOtp = async (e) => {
        e.preventDefault();
        console.log(number);
        // setError("");
        // if (number === "" || number === undefined)
        //     return setError("Please enter a valid phone number!");
        try {
            // const response = await setUpRecaptha(number);
            // setResult(response);
            // setFlag(true);
        } catch (err) {
            // setError(err.message);
        }
    };

    const verifyOtp = async (e) => {
        e.preventDefault();
        // setError("");
        // if (otp === "" || otp === null) return;
        try {
            await result.confirm(otp);
            navigate("/");
        } catch (err) {
            // setError(err.message);
        }
    };
    return (
        <>

            <Form.Group as={Col} md="3" controlId="validationFormik06">
                <Form.Label>Phone Number</Form.Label>
                <PhoneInput
                    defaultCountry='IN'
                    value={number}
                    onChange={setNumber}
                    placeholder="Enter Number"
                />
                <div id="recaptcha-container"></div>


            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik07">
                <Form.Label> </Form.Label><br />
                <Button md='2' variant='outline-success' OnClick={getOtp}>Get OTP</Button>

            </Form.Group>
            <Form.Group as={Col} md="3" controlId="formBasicOtp">
                <Form.Label>Enter OTP</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter OTP "
                    name="otp"
                    onChange={(e) => setOtp(e.target.value)}
                />
                <Form.Label> </Form.Label><br />
                <Button md='2' variant='outline-success' OnClick={verifyOtp}>Verify</Button>

            </Form.Group>
        </>
    );
}

export default PhoneAppoint;