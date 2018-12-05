import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from './Button';
import {Display} from './Display';

class App extends Component {
  render(){
    return <div>
    <Button text="Clickme"/>
    <Display text="test"/>
    </div>
  }

}

export default App;
