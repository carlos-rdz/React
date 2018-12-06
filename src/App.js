import React, { Component } from 'react';
import './App.css';
import Button from './Button'
import Display from './Display'
const Timestamp = require('react-timestamp');






class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dates: []
    }
    // this.state = {time:"test"};
    // this.createTime = this.createTime.bind(this);
  }
  

  render(){ 
    return (
      <div className="App">
        <Button 
          handleClick={this._addDate}
        />
        <Display
          dates={this.state.dates}
        />
      
      </div>

    )
    

}


_addDate = () => {
  const newDate = new Date();
  this.setState({
    dates: [
      ... this.state.dates,

      newDate.toLocaleString()
    ]
  });
}
}
export default App;
