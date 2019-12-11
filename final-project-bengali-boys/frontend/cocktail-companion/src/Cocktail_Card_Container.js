import React, { Component } from 'react';
import Cocktail_Card from './Cocktail_Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Top_NavBar from './Top_NavBar';

var json_data = require("./food.json");
//[
//     {
//         "Name": "Blue Cheese Burger",
//         "Difficulty": "Normal",
//         "Ethnicity": "American",
//         "Time": "2.5",
//         "Image": "burger.jpg",
//         "Site:": "https://www.allrecipes.com/recipe/24685/blue-cheese-burgers/"
//     },
//     {
//         "Name": "Margherita Pizza",
//         "Difficulty": "Easy",
//         "Ethnicity": "Italian",
//         "Time": "0.5",
//         "Image": "pizza.jpg",
//         "Site:": "https://www.allrecipes.com/recipe/275573/margherita-pizza-with-sausage-and-pesto/"
//     },
//     {
//         "Name": "Japanese Curry",
//         "Difficulty": "Hard",
//         "Ethnicity": "Asian",
//         "Time": "1.5",
//         "Image": "curry.jpg",
//         "Site:": "https://www.allrecipes.com/recipe/274077/japanese-curry/"
//     },
//     {
//         "Name": "Pasta Pomodoro",
//         "Difficulty": "Normal",
//         "Ethnicity": "Italian",
//         "Time": "0.5",
//         "Image": "pasta.jpg",
//         "Site:": "https://www.allrecipes.com/recipe/23847/pasta-pomodoro/"
//     },
//     {
//         "Name": "Beef Lasagana",
//         "Difficulty": "Hard",
//         "Ethnicity": "Italian",
//         "Time": "1.5",
//         "Image": "lasagna.jpg",
//         "Site:": "https://www.allrecipes.com/recipe/220346/eggplant-and-ground-beef-lasagna/"
//     },
//     {
//         "Name": "Pork Fried Rice",
//         "Difficulty": "Normal",
//         "Ethnicity": "Asian",
//         "Time": "0.5",
//         "Image": "rice.jpg",
//         "Site:": "https://www.allrecipes.com/recipe/230818/pork-fried-rice/"
//     },
//     {
//         "Name": "Chicken Quesadillas",
//         "Difficulty": "Easy",
//         "Ethnicity": "Mexican",
//         "Time": "1.0",
//         "Image": "quesadilla.jpg",
//         "Site:": "https://www.allrecipes.com/recipe/21659/chicken-quesadillas/"
//     },
//     {
//         "Name": "Fish Tacos",
//         "Difficulty": "Easy",
//         "Ethnicity": "Mexican",
//         "Time": "1.0",
//         "Image": "tacos.jpg",
//         "Site:": "https://www.allrecipes.com/recipe/53729/fish-tacos/"
//     },
//     {
//         "Name": "Filipino Adobo",
//         "Difficulty": "Easy",
//         "Ethnicity": "Asian",
//         "Time": "1.0",
//         "Image": "adobo.jpg",
//         "Site:": "https://www.allrecipes.com/recipe/128699/famous-chicken-adobo/"
//     },
//     {
//         "Name": "Fluffy Pancakes",
//         "Difficulty": "Hard",
//         "Ethnicity": "American",
//         "Time": "0.5",
//         "Image": "pancakes.jpg",
//         "Site:": "https://www.allrecipes.com/recipe/162760/fluffy-pancakes/"
//     }
// ]

class Cocktail_Card_Container extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        }
    }
    ReptileList() {
      
        return (
          <div>
            {json_data.map(food_item =>
                 <Cocktail_Card Name={food_item.Name} Difficulty={food_item.Difficulty} Ethnicity={food_item.Ethnicity} Time={food_item.Time} Image={"/assets/"+food_item.Image} Site={food_item.Site}></Cocktail_Card>
                 )}
          </div>
        );
    }
    render() { 
        return ( 
        <div>
        {this.ReptileList()}
        <CardGroup>
        </CardGroup>
       </div> );
    }
}
 
export default Cocktail_Card_Container;