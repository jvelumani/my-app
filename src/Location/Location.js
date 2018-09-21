import React, { Component } from 'react'

 class Location extends Component {
     constructor(){
         super()
         this.state = {
            Location:[]
         }
     }
     findMatch =()=>{
        fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
            .then(Response => Response.json())
            .then(data => this.setState({Location:data}))
            console.table(this.state.Location)
     }
  render() {
      
    
    return (
      <div>
        <label>Location </label> 
        <input onChange={this.findMatch} type="text"/>
      </div>
    )
  }
}

export default Location
