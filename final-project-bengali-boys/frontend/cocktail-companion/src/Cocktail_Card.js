import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
class Cocktail_Card extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Card>
                <Card.Img variant="top" src={this.props.Image}/>
                <Card.Body>
                    <Card.Title>{this.props.Name}</Card.Title>
                </Card.Body>
            </Card>
        );
    }
}

export default Cocktail_Card;