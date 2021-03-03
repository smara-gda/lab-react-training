import React from 'react';
// iteration 9
class ClickablePicture extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           clicked: false
        }
    }

toggleImage = () => {
    this.setState((state) => ({ clicked: !state.clicked }))
  }
    render(){
        return(
            <div>
                <img 
                  onClick={this.toggleImage} 
                  src={this.state.clicked ? this.props.imgClicked : this.props.img} 
                  alt='profile'
                />
            </div>
        )
    }
}

export default ClickablePicture;