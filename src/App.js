import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IdCard from './IdCard.jsx';
import './IdCard.css';

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
      </header>
    </div>
  );
}

export default App;
