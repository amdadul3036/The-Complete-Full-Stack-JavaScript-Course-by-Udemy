import React, { useState } from 'react';

const NumberChange = () => {
    const [dhon , setDhon] =useState(0);
        function handleClick (){
            setDhon(dhon + 1);
        }
    return (
        <div>
            <button onClick = {handleClick} >Click Me</button>
             <h1>Number of click is {dhon}</h1>
        </div>
    );
};

export default NumberChange;