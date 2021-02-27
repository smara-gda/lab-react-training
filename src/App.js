import React from 'react';
import './App.css';
import './IdCard.css';
import './Greetings.css';
import './Random.css';
import './BoxColor.css';
import './CreditCard.css';
import Greetings from './Greetings';
import Random from './Random';
import BoxColor from './BoxColor';
import IdCard from './IdCard.jsx';
import CreditCard from './CreditCard.jsx';

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
      <div className='CreditCard-Container'> 
      <CreditCard
         type="Visa"
         number="0123456789018845"
         expirationMonth={3}
         expirationYear={2021}
         bank="BNP"
         owner="Maxence Bouret"
         bgColor="#11aa99"
         color="white" />
      <CreditCard
         type="Master Card"
         number="0123456789010995"
         expirationMonth={3}
         expirationYear={2021}
         bank="N26"
         owner="Maxence Bouret"
         bgColor="#eeeeee"
         color="#222222" />
      <CreditCard
         type="Visa"
         number="0123456789016984"
         expirationMonth={12}
         expirationYear={2019}
         bank="Name of the Bank"
         owner="Firstname Lastname"
         bgColor="#ddbb55"
         color="white" />



      </div>

      </header>
    </div>
  




  );
}

export default App;
