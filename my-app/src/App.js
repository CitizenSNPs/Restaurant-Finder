import React, { Component } from 'react';
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

  // returns city/restaurant info
  showInfo() {

    var mapPrice = function(prices){
      var list = [];
      for (var i=0; i<prices; i++){
        list.push('$')};
      return list;
      }

    let entity_id = this.state.cityID;
    let config = {'user-key': '167873bcd96621d0bb49c45bfc0ffdc1'};
    let prices = ['$'];
    var start = Math.floor(Math.random()*80);
    axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${entity_id}&entity_type=city&${start}=0&count=40`, {headers: config}).then(res => {
        var index = Math.floor(Math.random()*(res.data.restaurants.length)); //generates a random index between 0 and Object length
        this.setState({name: res.data.restaurants[index].restaurant.name,
                      address:res.data.restaurants[index].restaurant.location.address,
                      price: mapPrice(Number(res.data.restaurants[index].restaurant.price_range)),
                      rating: Number(res.data.restaurants[index].restaurant.user_rating.aggregate_rating),
                      image: res.data.restaurants[index].restaurant.featured_image,
                      votes: "(" + Number(res.data.restaurants[index].restaurant.user_rating.votes) + " votes)"
                    }, function() {
                      document.querySelector('img').style = "visibility: visible";
                      document.querySelector('.showMore').style = "visibility: visible";
                    });
    });
}

  render() {

    return (
      <div id="app">
      <h1>{this.state.name}</h1>
      <h2>{this.state.address}</h2>
      <h3>{this.state.price}</h3>
      <StarRatings
        rating={this.state.rating}
        starRatedColor="white"
        starEmptyColor= "transparent"
        starDimension="30px"
        starSpacing="5px"
      />
      <h4>{this.state.votes}</h4>
      <img src= {this.state.image} alt="Image Not Available"/>
      <button className="btn btn-primary showMore" onClick={this.showInfo}>Show me another!</button>
      </div>
    );
  };
};

export default App;
