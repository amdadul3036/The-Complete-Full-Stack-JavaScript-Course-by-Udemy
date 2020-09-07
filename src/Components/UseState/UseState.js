import React, { useState } from 'react';

const NumberChange = () => {
    const [click , setClick] =useState(0);
        function increase (){
            setClick(click + 1);
        }

        function decrease (){
            setClick(click - 1)
        }
    return (
        <div>
            <button onClick = {increase} >Increase</button>
            <button onClick = {decrease}>Decrease</button>
             <h1>Number of click is {click}</h1>
        </div>
    );
};

export default NumberChange;