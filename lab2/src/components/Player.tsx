import React from 'react';

class Player  extends React.Component <any,any>{
  
  constructor(props:any) {
    super(props);
    this.state = {times:0};


    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    this.setState({
      times:this.state.times+1
    });
    
    this.props.onKidclick(this.props.playerId)
  }

  render() {
    console.log(this.state)
    return (
      <div> 
      <fieldset>  
      {this.props.label} <br/>
      Name:{this.props.name} <br/>
      Played number of times: {this.state.times}
      <button onClick={this.handleClick} disabled={!this.props.enabled}> 
        {this.props.enabled ? 'Play' : 'This user is playing now'}
      </button>     
      </fieldset> 
      <style>

      </style>
      </div>
     
    );
  }
}





export default Player