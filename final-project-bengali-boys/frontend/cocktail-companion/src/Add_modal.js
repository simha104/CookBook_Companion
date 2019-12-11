import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Add_modal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="Title" placeholder="Recipe Title" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridImage">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" placeholder="Image URL" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSite">
                        <Form.Label>Recipe Site</Form.Label>
                        <Form.Control type="text" placeholder="Recipe URL" />
                    </Form.Group>
                </Form.Row>


                <Form.Row>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Difficulty</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>Easy</option>
                            <option>Normal</option>
                            <option>Hard</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Ethnicity</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>American</option>
                            <option>Asian</option>
                            <option>Italian</option>
                            <option>Mexican</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Time</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>0.5 hours</option>
                            <option>1.0 hours</option>
                            <option>1.5 hours</option>
                            <option>2.0 hours</option>
                            <option>2.5 hours</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default Add_modal;