
import React from 'react';

class LikeButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
handleButtonClick = () => {
  this.setState({
      count: this.state.count +1 
  })
};
render(){
    const COLORS = ['purple', 'blue', 'green', 'yellow']
    return(
        <button 
          style= {{backgroundColor: COLORS[this.state.count % COLORS.length]}}
          onClick={this.handleButtonClick}> 
            {this.state.count} {this.state.count === 1 ? 'Like' : 'Likes'} 
        </button>
    ) 
}
}
export default LikeButton;