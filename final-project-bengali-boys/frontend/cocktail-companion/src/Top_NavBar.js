import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Cocktail_Card_Container from './Cocktail_Card_Container';


class Top_NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempFilter: {
                Difficulty: "All",
                Ethnicity: "All",
                Time: "All"
            },
            finalFilter: {
                Difficulty: "All",
                Ethnicity: "All",
                Time: "All"
            }
        }
        this.createFilter = this.createFilter.bind(this);
    }

    AddtoFilterDifficulty(event){
        this.state.tempFilter.Difficulty = event;
    }

    AddtoFilterEthnicity(event){
        this.state.tempFilter.Ethnicity = event;
    }

    AddtoFilterTime(event){
        this.state.tempFilter.Time = event;
    }
    
    createFilter(){
       this.setState({finalFilter: this.state.tempFilter});
    }


    render() {
        return (
            <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home" style={{ color: 'black' }} >Filters: </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Difficulty" id="collasible-nav-dropdown" onSelect = {(event)=>this.AddtoFilterDifficulty(event)}>
                            <NavDropdown.Item eventKey = "Easy" href="#action/3.1">Easy</NavDropdown.Item>
                            <NavDropdown.Item eventKey = "Normal" href="#action/3.2">Normal</NavDropdown.Item>
                            <NavDropdown.Item eventKey = "Hard" href="#action/3.3">Hard</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey = "All" href="#action/3.4">All</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Ethnicity" id="collasible-nav-dropdown" onSelect = {(event)=>this.AddtoFilterEthnicity(event)}>
                            <NavDropdown.Item eventKey = "American" href="#action/3.1">American</NavDropdown.Item>
                            <NavDropdown.Item eventKey = "Asian" href="#action/3.2">Asian</NavDropdown.Item>
                            <NavDropdown.Item eventKey = "Italian" href="#action/3.3">Italian</NavDropdown.Item>
                            <NavDropdown.Item eventKey = "Mexican" href="#action/3.4">Mexican</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey = "All" href="#action/3.5">All</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Time" id="collasible-nav-dropdown" onSelect = {(event)=>this.AddtoFilterTime(event)}>
                            <NavDropdown.Item eventKey = "0.5" href="#action/3.1">0.5 hours</NavDropdown.Item>
                            <NavDropdown.Item eventKey = "1.0" href="#action/3.2">1.0 hours</NavDropdown.Item>
                            <NavDropdown.Item eventKey = "1.5" href="#action/3.3">1.5 hours</NavDropdown.Item>
                            <NavDropdown.Item eventKey = "2.0" href="#action/3.4">2.0 hours</NavDropdown.Item>
                            <NavDropdown.Item eventKey = "2.5" href="#action/3.5">2.5 hours</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey = "All" href="#action/3.6">All</NavDropdown.Item>
                        </NavDropdown>
                        <Button variant="secondary" onClick = {this.createFilter}>Apply</Button>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Cocktail_Card_Container filter = {this.state.finalFilter} ></Cocktail_Card_Container>
            </div>
        );
    }
}

export default Top_NavBar;