import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class Body_bg extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{ width: "100%", height: '100%' }}>
                <Jumbotron fluid>
                    <Container>
                    <Image src="/assets/bodybg.jpg" fluid />
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Body_bg;