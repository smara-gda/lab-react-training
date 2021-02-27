import React from 'react';

const CreditCard = props => {

const {type,number,expirationMonth,expirationYear,bank,owner,bgColor,color} = props

const newNumber = "**** **** **** " + number.slice(-4);
    let month;
    if(expirationMonth < 10) {
        month = `0${expirationMonth}`;
    } else {
        month = expirationMonth;
    }
return(

    <div style={{backgroundColor: bgColor, color: color}} className="CreditCard-cards">
        <p style={{textAlign: "right", marginRight: '4px'}}>{type} </p>
        <p style= { {fontSize: '26px'}}>{newNumber} </p>
        <p style={{textAlign: "left"}}>Expires: 
         {month}/{JSON.stringify(expirationYear).slice(-2)} 
          <strong style={{paddingLeft: '6px'}}>
            {bank}
          </strong>
        </p>
        <p style={{textAlign: "left"}}>{owner}</p>


    </div>
)


}


export default CreditCard;