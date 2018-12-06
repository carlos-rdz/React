import React from 'react';



function convertDates(ourDates){
    const DatesAsListItems = ourDates.map((dateString) => {
        return (<li>{dateString}</li>);
});
return DatesAsListItems
}

const DateList = (props) => {
    return (
        <ul>
        {convertDates(props.dates)}
        </ul>
    );
}


export default DateList;