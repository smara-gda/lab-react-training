import React from 'react';
import './App.css';
import './IdCard.css';
import './Greetings.css';
import './Random.css';
import './BoxColor.css';
import Greetings from './Greetings';
import Random from './Random';
import BoxColor from './BoxColor';
import IdCard from './IdCard.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
       <IdCard
         lastName='Doe'
         firstName='John'
         gender='male'
         height={178}
         birth={new Date(1992,6,15)}
         picture="https://randomuser.me/api/portraits/men/44.jpg"
     />

     <IdCard
         lastName='Smaragda'
         firstName='Kal'
         gender='female'
         height={158}
         birth={new Date(1988,9,30)}
         picture="https://randomuser.me/api/portraits/women/44.jpg"
     />
      <div>
         <Greetings lang="el">Σμαράγδα</Greetings>
         <Greetings lang="fr">François</Greetings>
     </div>
     <div> 
       <Random min={4} max={6} />
       <Random min={124} max={1000} />
     </div>

      <div>
         <BoxColor r={255} g={0} b={0} />
         <BoxColor r={128} g={255} b={0} />
       </div>
      </header>
    </div>
  );
}

export default App;
