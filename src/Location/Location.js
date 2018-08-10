import React, { Component } from 'react'

 class Location extends Component {
     constructor(){
         super()
         this.state = {
            Location:[]
         }
     }
     componentDidMount(){
       
     }
     changecity =()=>{
        fetch('https://gist.githubusercontent.com/ebaranov/41bf38fdb1a2cb19a781/raw/fb097a60427717b262d5058633590749f366bd80/gistfile1.json')
            .then(Response => Response.json())
            .then(data => this.setState({Location:data}))
        console.table(this.state.Location.countries)
     }
  render() {

    
    return (
      <div>
        <label>Location </label> 
        <input onChange={this.changecity} type="text"/>
      </div>
    )
  }
}

export default Location
