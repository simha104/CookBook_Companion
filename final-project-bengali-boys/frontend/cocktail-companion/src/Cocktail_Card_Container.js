import React, { Component } from 'react';
import Cocktail_Card from './Cocktail_Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Top_NavBar from './Top_NavBar';


class Cocktail_Card_Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            food_item: [],
            print_food: [],
            prev_filters: this.props.filter,

        }
        this.retrieve_food = this.retrieve_food.bind(this);
    }

    CheckFilters(temp){
        console.log(this.props.filter);
        if(this.props.filter){
            console.log("filter exists:")
            console.log(this.props.filter);
            if((temp.Ethnicity != this.props.filter.Ethnicity) && this.props.filter.Ethnicity != "All"){
                console.log("false");
                return false;
            }
            if((temp.Difficulty != this.props.filter.Difficulty) && this.props.filter.Difficulty != "All"){
                console.log("false");
                return false;
            }
            if((temp.Time != this.props.filter.Time) && this.props.filter.Time != "All"){
                console.log("false");
                return false;
            }
        }
        console.log("true");
        return true;
    }

    // componentWillReceiveProps(){
    //         console.log("filters changed");
    //         console.log(this.props.filter);
    //         this.setState({food_item: this.state.food_item});
    //         this.ApplyFilters();        
    // }

    componentWillMount(){
        this.retrieve_food();
    }

    ApplyFilters(){
        this.state.print_food =[];
            for(let i = 0; i < this.state.food_item.length; i++){
                if(this.CheckFilters(this.state.food_item[i])){
                    console.log("filtered post:");
                    console.log(this.state.food_item[i]);
                    this.state.print_food.push(this.state.food_item[i]);
                }
            }
             
    }

    FoodList() {
        this.ApplyFilters();
        return (
          <div>
            {this.state.print_food.map(food_list =>
                 <Cocktail_Card Id = {food_list._id} Name={food_list.Name} Site={food_list.Site} Difficulty={food_list.Difficulty} Ethnicity={food_list.Ethnicity} Time={food_list.Time} Image={food_list.Image} Site={food_list.Site}></Cocktail_Card>
                 )}
          </div>
        );
    }

    retrieve_food = ()=> {
        fetch('http://localhost:3000/foodsite')
            .then(
                function (response) {
                    console.log(response);
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    // Examine the text in the response
                    response.json().then(function (data) {
                        this.setState({food_item: data});
                    }.bind(this));
                }.bind(this)
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
    }



    render() {
        return (
            <div>
                {this.FoodList()}
                <CardGroup>
                </CardGroup>
            </div>);
    }

}

export default Cocktail_Card_Container;
