import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../Untitled.png'
import '../App.css'

export default function Menu() {

  return (

    <>
      <Navbar fixed='top' key='md' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand>Psyc Chek {' '}
            <img
              alt=""
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/showappt">
                <Nav.Link >Check Appointment</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>  About us</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}


// import {SignUpContainer,LoginContainer} from './SignUpContainer'
// const [show, setShow] = useState(false);
// const [LoginShow, setLoginShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const LoginClose = () => setLoginShow(false);
  // const handleShow = () => setShow(true);
  // const LogShow = () => setLoginShow(true);

/* <Navbar fixed='top' key='md' bg="dark" variant="dark" expand="md" className="">
        <Container fluid>
          <Navbar.Brand >Psyc Chek</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <LinkContainer to="/">
                  <Nav.Link>  Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/showappt">
                  <Nav.Link >Check Appointment</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                  <Nav.Link>  About us</Nav.Link>
                </LinkContainer>
              </Nav>

              <Button onClick={handleShow} variant="outline-success">Sign Up</Button>

              <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Please Signup to Continue</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignUpContainer/>
                </Modal.Body>
                
              </Modal>
              <Button onClick={LogShow} variant="outline-success">Login</Button>
              <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered show={LoginShow} onHide={LoginClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Please Login to Continue</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignUpContainer/>
                </Modal.Body>
                
              </Modal>

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar> */

/* <Nav> <Button onClick={handleShow} variant="outline-success">Sign Up</Button>

              <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Please Signup to Continue</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <SignUpContainer />
                </Modal.Body>

              </Modal>
              <Button onClick={LogShow} variant="outline-success">Login</Button>
              <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered show={LoginShow} onHide={LoginClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Please Login to Continue</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <LoginContainer />
                </Modal.Body>

              </Modal>
            </Nav> */