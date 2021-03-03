
import React from 'react';
// iteration 6
function Rating( {children} ){
    return (
        <div>
            {'★'.repeat(Math.round(children)).padEnd(5, '☆')}
        </div>
    );
}
export default Rating;