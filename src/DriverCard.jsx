
import React from 'react';
import Rating from './Rating.jsx'
// iteration 7
function DriverCard( {name, rating, img, car} ){
    return (
        <div style={{backgroundColor: '#add8e6', width: '70%' , borderRadius: '10%', marginLeft: '3em'}}>
            <div>
              <img style={{width: "9em", borderRadius: '50%'}}  src={img} alt="profile-pic"/>
            </div>
            <h2>{name}</h2>
            <Rating>{rating}</Rating>
            <p>{car.model} {car.licensePlate}</p>
        </div>
    );
}
export default DriverCard;