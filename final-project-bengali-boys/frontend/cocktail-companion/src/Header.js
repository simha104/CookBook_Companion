import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{ display: flex, position: relative }}>
                <Jumbotron fluid>
                    <Container>
                    <Image src="/assets/header.jpg" fluid />
                        <h1>Cookbook Companion</h1>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;