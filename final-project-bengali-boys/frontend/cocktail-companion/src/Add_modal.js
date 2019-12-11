import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Add_modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        Name: "",
        Difficulty: "",
        Ethnicity: "",
        Time: "",
        Image: "",
        Site: ""
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  add_difficulty(event){
    this.state.data.Difficulty = event.target.value;
  }

  add_ethnicity(event){
    console.log(event.type);
    this.state.data.Ethnicity = event.target.value;
  }

  add_time(event){
    this.state.data.Time = event.target.value;
  }

  add_title(event){
    this.state.data.Name = event.target.value;

  }

  add_img(event){
    this.state.data.Image = event.target.value;
  }

  add_site(event){
    this.state.data.Site = event.target.value;
  }


  handleSubmit(event){
    event.preventDefault();


    var Name1= this.state.data.Name;
    console.log(Name1);
    var Difficulty1= this.state.data.Difficulty;
    console.log(Difficulty1);
    var Ethnicity1= this.state.data.Ethnicity;
    console.log(Ethnicity1);
    var Time1= this.state.data.Time;
    console.log(Time1);
    var Image1= this.state.data.Image;
    console.log(Image1);
    var Site1= this.state.data.Site;
    

    fetch('http://localhost:3000/foodsite', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Name:Name1,
        Difficulty: Difficulty1,
        Ethnicity: Ethnicity1,
        Time: Time1,
        Image: Image1,
        Site: Site1
      }),

  });
  window.location.reload(true);
  }

  render() {
    return (
      <Form style={{margin: "15px"}}>
        <Form.Label></Form.Label>
        <h2>Add New Recipe:</h2>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridTitle" onChange = {(event)=>this.add_title(event)}>
            <Form.Label>Title</Form.Label>
            <Form.Control type="Title" placeholder="Recipe Title" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridImage" onChange = {(event)=>this.add_img(event)}>
            <Form.Label>Image</Form.Label>
            <Form.Control type="text" placeholder="Image URL" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridSite" onChange = {(event)=>this.add_site(event)} >
            <Form.Label>Recipe Site</Form.Label>
            <Form.Control type="text" placeholder="Recipe URL" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridState" onChange = {(event)=>this.add_difficulty(event)} >
            <Form.Label>Difficulty</Form.Label>
            <Form.Control as="select">
              <option>Choose...</option>
              <option eventKey = "Easy">Easy</option>
              <option eventKey = "Normal">Normal</option>
              <option eventKey = "Hard">Hard</option>
            </Form.Control>
          </Form.Group >
          <Form.Group as={Col} controlId="formGridState" onChange = {(event)=>this.add_ethnicity(event)}>
            <Form.Label >Ethnicity</Form.Label>
            <Form.Control as="select">
              <option>Choose...</option>
              <option eventKey = "American">American</option>
              <option eventKey = "Asian">Asian</option>
              <option eventKey = "Italian">Italian</option>
              <option eventKey = "Mexican">Mexican</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState" onChange = {(event)=>this.add_time(event)}>
            <Form.Label>Time(Hours)</Form.Label>
            <Form.Control as="select">
              <option>Choose...</option>
              <option eventKey = "0.5">0.5</option>
              <option eventKey = "1.0">1.0</option>
              <option eventKey = "1.5">1.5</option>
              <option eventKey = "2.0">2.0</option>
              <option eventKey = "2.5">2.5</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Button style={{margin: "15px"}} variant="primary" type="submit"  onClick = {this.handleSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default Add_modal;
