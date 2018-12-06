import React from 'react';

const Button = (props) => {
    return (
        <button
        onClick={props.handleClick}
          >click me</button>
    );
}


export default Button
