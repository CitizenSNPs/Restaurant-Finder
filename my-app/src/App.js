import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import StarRatings from 'react-star-ratings';


class App extends Component {


  constructor(props){
    super(props);
      this.state = {}
      this.showInfo = this.showInfo.bind(this);
  }


  componentWillReceiveProps(nextProps){
    if (nextProps.cityID !== this.props.cityID){
    this.setState(nextProps, function(){
      this.showInfo();
    });
  }
}



  componentDidMount(){
    console.log(this.state);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  showInfo() {
    console.log(this.state.cityID);

    var mapPrice = function(prices){
      var list = [];
      for (var i=0; i<prices; i++){
        list.push('$')};
      return list;
      }

    let entity_id = this.state.cityID;
    let config = {'user-key': '167873bcd96621d0bb49c45bfc0ffdc1'};
    let prices = ['$'];
    axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${entity_id}&entity_type=city&count=40`, {headers: config}).then(res => {
      console.log(res.data.restaurants);
        var index = Math.floor(Math.random()*(res.data.restaurants.length)); //generates a random index
        console.log(index);
        this.setState({name: res.data.restaurants[index].restaurant.name,
                      address:res.data.restaurants[index].restaurant.location.address,
                      price: mapPrice(Number(res.data.restaurants[index].restaurant.price_range)),
                      rating: Number(res.data.restaurants[index].restaurant.user_rating.aggregate_rating),
                      image: res.data.restaurants[index].restaurant.featured_image
                      });
    });
  }



  render() {

    return (
      <div id="app">
      <h1>{this.state.name}</h1>
      <h2>{this.state.address}</h2>
      <h3>{this.state.price}</h3>
      <h3>{this.state.rating}</h3>
      <StarRatings
        rating={this.state.rating}
        starRatedColor="blue"
        starEmptyColor= "#FC6C2D"
        starDimension="20px"
        starSpacing="5px"
      />
      <img src= {this.state.image} alt="no image" />
      <button onClick={this.showInfo}>Show me another!</button>
      </div>
    );
  };
};

export default App;
