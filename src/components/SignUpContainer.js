import React, { useRef } from 'react'
import { Form, Button } from 'react-bootstrap';

const num = Math.abs(Math.floor(Math.random() * 10000));
export function SignUpContainer() {
  
  return (
    <div>
      <Form >
        <Form.Group  className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type='submit' >
          Register
        </Button>
      </Form>
    </div>
  )
}

export function LoginContainer() {
  const refr = useRef(null)
  const formvalue = () => {
    console.log(refr.current[2].value)
 }
  return (
    <div>
      <Form ref={refr}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div>
          Enter Captcha: {num} <br />
          <input id='captcha' type="number" placeholder='Enter Value' ></input>
        </div>
        <Button variant="primary" onClick={formvalue} type="submit">
          Login
        </Button>
      </Form>
    </div>
  )
}
