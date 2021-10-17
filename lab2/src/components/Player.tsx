import { timeStamp } from 'console';
import React, {Component} from 'react';



// function Player(props:any) {
//     return (
//       <button onClick={props.onClick}>
//         Play
//       </button>
//     );
//   }



class Player  extends React.Component <any,any

>{
  
  constructor(props:any) {
    super(props);
    this.state = {isToggleOn:true,times:0};

    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state+"handler click")
    this.setState({
      isToggleOn: !this.state.isToggleOn,
      times:this.state.times+1
    });
  }

  render() {
    console.log(this.state)
    return (
      <div> 
      {this.props.label} <br/>
      Name:{this.props.name} <br/>
      Played number of times: {this.state.times}<br/>
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Play' : 'This user is playing now'}
      </button>
      </div>
     
    );
  }
}





export default Player