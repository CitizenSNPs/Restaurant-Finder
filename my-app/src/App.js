import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import StarRatings from 'react-star-ratings';


class App extends Component {


  constructor(props){
    super(props);
      this.state = {};
  }

  componentDidMount() { //stop updating with componentDidUpdate
    let config = {'Authorization': 'Bearer 167873bcd96621d0bb49c45bfc0ffdc1', 'X-Zomato-API-Key': '167873bcd96621d0bb49c45bfc0ffdc1'};
    axios.get('https://developers.zomato.com/api/v2.1/search?entity_id=302&entity_type=city&count=100', {headers: config}).then(res => {
      console.log(res.data.restaurants);
        let index = Math.floor(Math.random()*(res.data.restaurants.length)); //generates a random index
        this.setState({name: res.data.restaurants[index].restaurant.name,
                      address:res.data.restaurants[index].restaurant.location.address,
                      price: res.data.restaurants[index].restaurant.price_range,
                      rating: res.data.restaurants[index].restaurant.user_rating.aggregate_rating,
                      image: res.data.restaurants[index].restaurant.featured_image
                      }); //returned result must be converted to string since Object returns are not valid
    })
  }


  render() {

    return (
      <div id="app">
      <h1>{this.state.name}</h1>
      <h2>{this.state.address}</h2>
      <h3>price: {this.state.price}</h3>
      <h3>rating: {this.state.rating}</h3>
      <img src= {this.state.image} alt="cannot display image" />
      </div>
    );
  };
};

export default App;
