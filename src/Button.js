import React from 'react';

export class Button extends React.Component {

     constructor(props){
         super(props);
         this.state = {time : 'default' };
        //  this.createDate.bind(this);
     }


     createDate(){
         let ourTime = new Date();
         this.setState({time : ourTime[1] })
     }

    render(){
        return <button onClick={this.createDate.bind(this)}> {this.props.text} {this.state.time} </button>
    }
}
