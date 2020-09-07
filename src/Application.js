import React, { useState } from 'react';

const Application = () => {

    var count = 0;

    function handleClick (){
        const [click , setClick] = useState(0);
    }
    return (
        <div>
            <h1>Number of click is {count}</h1>
            <button onClick = {handleClick}>Click Me</button>
        </div>
    );
};

export default Application;