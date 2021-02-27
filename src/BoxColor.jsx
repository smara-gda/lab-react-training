import React from "react";

const BoxColor = props =>{
const {r,g,b} = props
 let color = `rgb(${r} , ${g},${b})`
    
    const divStyle = {
        backgroundColor: color,
        width: 400, height: 80, color: 'white'
      };

  
return(
   <div>
       <div  style={divStyle}>{color}</div>       
 </div> 
)
}

export default BoxColor;