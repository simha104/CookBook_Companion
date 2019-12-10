import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


class Top_NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home" style={{ color: 'black' }} >Cookbook Companion</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Difficulty" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Easy</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Normal</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Hard</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">All</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Ethnicity" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">American</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Asian</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Italian</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Mexican</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">All</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Time" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">0.5 hours</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">1.0 hours</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">1.5 hours</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">2.0 hours</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">2.5 hours</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">All</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#apply" style={{ color: 'black' }} >Apply</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Top_NavBar;