
import React from 'react';


const Greetings = props =>{
const {lang, children} = props

let word = "";

    switch (lang) {
        case "de":
            word = "Hallo";
            break;
        case "el":
            word = "Γειά!";
            break;
        case "es":
            word = "Hola";
            break;
        case "hr":
            word = "Pozdrav";
            break;
        default:
            word = "Hey";
    }

    return(
         <div className="Greetings-wrapper">
               <p> {word} {children}</p>
         </div>
    )
}




export default Greetings;