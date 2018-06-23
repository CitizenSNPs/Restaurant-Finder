import React, { Component } from 'react';
import axios from 'axios';
import App from './App.js';


class Form extends Component{
  constructor(props){
    super(props);
  this.state = {};
  this.submitValue = this.submitValue.bind(this);
  this.getCityID = this.getCityID.bind(this);
  }


  render(){
    return (
      <div><form>
      <input className = "input-group-mb-3" type="text" id="form" placeholder="Enter City (ex: Albany, NY)"></input>
      <button className="btn btn-outline-secondary submitCity" type="button" onClick={this.submitValue}>Submit</button>
      </form>
      <h4 id="errors"></h4>
      <App cityID={this.state.cityID} />
      </div>
    )

  }

  getCityID(){
    //create serialized code
    var query = this.state.cityName.replace(', ','%2C%20').replace(' ','%20');
    document.querySelector("#errors").style.visibility = "hidden";
    let config = {'user-key': '167873bcd96621d0bb49c45bfc0ffdc1'}
    axios.get(`https://developers.zomato.com/api/v2.1/locations?query=${query}`, {headers:config}).then(res => {
      this.setState({cityID: res.data.location_suggestions[0].city_id});
    }).catch(function(err){
      document.querySelector("#errors").style.visibility = "visible";
      document.querySelector("#errors").innerHTML = "Please enter a valid city. Ex: Albany, NY";
  });
  }


  submitValue(){
      this.setState({cityName: document.getElementById('form').value}, function(){
          this.getCityID();
        });
  }

}

export default Form;
