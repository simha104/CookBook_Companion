import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

class Cocktail_Card extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleClick = this.handleClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }


    handleClick(){
        window.open(this.props.Site);
        console.log(this.props.Site);
    }

    handleDeleteClick(){
        console.log(this.props.Id);
        var each_id = this.props.Id;

        fetch('http://localhost:3000/foodsite/' + this.props.Id, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: each_id})
        })
        window.location.reload(true);
    }

    render() {
        return (
            <Card style = {{padding: '10px', margin: '10px', width: '18rem', display: 'inline-block'}}>
                <Card.Img style={{height: '240px', width: '265px'}} src={this.props.Image}/>
                <Card.Body>
                    <Card.Title>{this.props.Name}</Card.Title>
                    <Button variant="primary" onClick = {this.handleClick}>Recipe</Button>
                    <Button variant="danger" onClick = {this.handleDeleteClick}>Delete</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default Cocktail_Card;