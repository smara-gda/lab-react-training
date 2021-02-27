
import React from 'react';


const IdCard = props =>{
const {lastName,firstName, gender, height, birth, picture} = props
    return(
<           div className="IdCard-Cards">
                <img src={picture} alt=""/>
                 <li>
                   <ul> <strong>First name: </strong> {firstName}</ul>
                   <ul> <strong>Last name:</strong>  {lastName}</ul>
                   <ul> <strong>Gender:</strong>  {gender}</ul>
                   <ul> <strong>Height:</strong>  {height}</ul>
                   <ul> <strong>Birth: </strong> {birth.toUTCString()}</ul>
                </li>

             </div>
    )
}




export default IdCard;