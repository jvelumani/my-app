import React from 'react';

class SubmitButton extends React.Component {
   constructor(props) {
      super(props);
    
      this.state = {
         data: 'Initial data...'
        
      }
      this.updateState = this.updateState.bind(this);
    
   };
   updateState =() => {
      this.setState({data: 'Data updated from the child component...'})
      
   }
   render() {
      return (
         <div>
            <Content myDataProp = {this.state.data }  
               updateStateProp = {this.updateState}></Content>
              
         </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <button className="btn btn-primary" onClick = {this.props.updateStateProp}>Login</button>
            <h3>{this.props.myDataProp}</h3>
         </div>
      );
   }
}

export default SubmitButton;