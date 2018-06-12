import React, { Component } from 'react';

class Form extends Component{
  constructor(props){
    super(props);

  this.state = {};
  this.submitValue = this.submitValue.bind(this);
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

  submitValue(){
      console.log(document.getElementById('form').value)
  }
}



export default Form;
