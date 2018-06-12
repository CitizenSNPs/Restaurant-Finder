import React, { Component } from 'react';

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
      </div>
    )

  }

  getCityID(){
    let config = {'Authorization': 'Bearer 167873bcd96621d0bb49c45bfc0ffdc1', 'X-Zomato-API-Key': '167873bcd96621d0bb49c45bfc0ffdc1'}
    axios.get('https://developers.zomato.com/api/v2.1/locations?query=San%20Diego%2C%20CA', {headers:config}).then(res => {
      console.log(res.location_suggestions.entity_id);
      var cityID = res.location_suggestions.entity_id;
    }
    )
  }

  submitValue(){
      console.log(document.getElementById('form').value)
  }
}



export default Form;
