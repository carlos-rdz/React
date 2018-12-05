import React from 'react';

export class Display extends React.Component {

     constructor(props){
         super(props)
     }

    render(){
        return <h1> {this.props.text} </h1>
    }
}
