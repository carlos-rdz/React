import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

  this.state = {
    scores: [
      {
        id:1,
        name: "carlos",
        score: 1001
      },
      {
        id:2,
        name: "carlos2",
        score: 100
      },
      {
        id:3,
        name: "carlos3",
        score: 1
      },
    ]
  }

  }
  
  
  render() {
    return (
      <div className="App">
        <h1>Scoreboard App</h1>
        <div className="score-container">
        {this._scoresAsCards()}
        
        </div>
      </div>
    );
  }

  _scoresAsCards(){
    const cards = this.state.scores.map(score => {
      return (<div key={score.id}> 
        <h2>Name: {score.name} // Score: {score.score}</h2>
        <button onClick={() => this._incrementScoreById(score.id)}> + </button>
      </div>)
    });
    return cards
  };

_incrementScoreById(id){
  

}

}

export default App;
