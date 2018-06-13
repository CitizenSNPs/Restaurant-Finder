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
      <input type="text" id="form" placeholder="Enter City (ex: Albany, NY)"></input>
      <button type="button" onClick={this.submitValue}>Submit</button>
      </form>
      <App cityCode={this.state.cityID} />
      </div>
    )

  }



  getCityID(){
    let query = this.state.cityName.replace(' ','%20').replace(', ','%2C%20');
    console.log(query);
     //the city needs to be a serialized code


    let config = {'user-key': '167873bcd96621d0bb49c45bfc0ffdc1'}
    console.log(config);
    axios.get(`https://developers.zomato.com/api/v2.1/locations?query=${query}`, {headers:config}).then(res => {
      console.log(res.data.location_suggestions[0].entity_id);
      this.setState({cityID: res.data.location_suggestions[0].entity_id}, function(){
        console.log(this.state);
      });
    }
    )
  }

  submitValue(){
      console.log(document.getElementById('form').value);
      this.setState({cityName: document.getElementById('form').value}, function(){
          this.getCityID();
        });
  }
}



export default Form;
