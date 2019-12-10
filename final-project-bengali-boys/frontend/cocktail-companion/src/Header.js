import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Container style={{}}>
                    <h1 style={{position: 'relative'}}>Cookbook Companion</h1>
                    {/* <Image style={{position: 'relative', height: 'auto', width: '100%' }} src="/assets/header.jpg" /> */}

                </Container>
            </div>
        );
    }
}

export default Header;