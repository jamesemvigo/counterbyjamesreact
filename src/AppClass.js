import React, { Component } from 'react'

export default class AppClass extends Component {
    constructor(props){
    super(props);
    this.state={
        count:0,
    }
   }
   componentDidMount() {
    console.log("after rand method");
    const inp=document.getElementById("input1");
    inp.focus();
  }

   
    increment=()=>{
        this.setState((previousState)=>({
            count: previousState.count+1,
        }));
      };
       decrement=()=>{
        this.setState((previousState)=>({
            count: previousState.count-1,
        }));
      };
      
  render() {
    return (
      <div>
        <div> <input type="text" id="input1"></input></div>
      <p> The count is : {this.state.count}</p>
      <button onClick={this.decrement}>-</button>
      <button onClick={this.increment}>+</button>
      </div>
    )
  }
}
