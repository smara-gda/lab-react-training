
import React from 'react';


const Random = props =>{
const {min, max} = props

let randomValue = Math.floor(Math.random()* (props.max - props.min) + props.min)

    return(
         <div className="Random-wrapper">
               <p> Random value between {min} and {max} is {randomValue}</p>
         </div>
    )
}

export default Random;