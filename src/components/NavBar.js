//rcep
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

export class navbar extends Component {

  render() {
    return (
      <div>
      <Navbar expand="lg" className="bg-dark fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/home" style={{color:'white'}} >Fire News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link as={Link} to="/home" style={{color:'white'}}>Home</Nav.Link>
              <Nav.Link as={Link} to="/Business" style={{color:'white'}}>Business</Nav.Link>
              <Nav.Link as={Link} to="/Entertainment" style={{color:'white'}}>Entertainment</Nav.Link>
              <Nav.Link as={Link} to="/Health" style={{color:'white'}}>Health</Nav.Link>
              <Nav.Link as={Link} to="/Science" style={{color:'white'}}>Science</Nav.Link>
              <Nav.Link as={Link} to="/Sports" style={{color:'white'}}>Sports</Nav.Link>
              <Nav.Link as={Link} to="/Technology"  style={{color:'white'}}>Technology</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown" style={{color:'white'}}>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
        {/* <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form> */}
      </Container>
    </Navbar>
      </div>
    )
  }
}

export default navbar

