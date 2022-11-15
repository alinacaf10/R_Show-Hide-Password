import React, { Component } from "react";
export default class App extends Component {
  state = {
    value: "",
    isActive:false,
    password:"password",
    show:"Show Password"
  };
  handleChange = (event) => {
    this.setState({ value: event.target.value});
    console.log(this.state);

  };
  reset = () => {
    this.setState({ value: "" });
  };
checker=()=>{
  if(!this.state.isActive){
  this.setState({isActive:true,password:"text",show:"Hide Password"})
  }
  else{
  this.setState({isActive:false,password:"password",show:"Show Password"})

  }
}

  render() {
    return (
      <>
        <label htmlFor="name">
          Password:
          <input
            value={this.state.value}
            id="name"
            name="name"
            type={this.state.password}
            onChange={this.handleChange}
          />
          <button type="button" onClick={this.reset}>
            X
          </button>
          <br/>
        {this.state.show}
          <input type="checkbox" checked={this.state.isActive} onChange={this.checker}/>
        </label>
      </>
    );
  }
}
