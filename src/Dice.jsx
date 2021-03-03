import React from "react";
// iteration 10
class Dice extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           img: '/img/dice5.png',
           randomNumber: Math.floor(Math.random() * (7 -1) +1 )
        }
    }


  toggleDiceImage= ( ) =>{
        this.setState(
            {img: '/img/dice-empty.png'}
        )
        let newRandomNumber = Math.floor(Math.random() * (7 -1) +1 )
        this.setState({
            randomNumber: newRandomNumber
        })
        setInterval(()=>{
            this.setPicture()
        }, 1000)
  }

  // display image depending on what random number we got

  setPicture = ()=>{
  // eslint-disable-next-line default-case
  switch (this.state.randomNumber){
      case 1 :
        this.setState({
            img:'/img/dice1.png'
        })
        break;
        case 2: 
        this.setState({
            img:'/img/dice2.png'
        })
        break;
        case 3: 
        this.setState({
            img:'/img/dice3.png'
        })
        break;
        case 4: 
        this.setState({
            img:'/img/dice4.png'
        })
        break;
        case 5: 
        this.setState({
            img:'/img/dice5.png'
        })
        break;
        case 6: 
        this.setState({
            img:'/img/dice6.png'
        })
        break; 
    }

   }
    render(){
        return(
            <div onClick={this.toggleDiceImage}>
              <img style= {{width: "46px"}} src={this.state.img} alt="Dice" />
            </div>
        )
    }
}
export default Dice