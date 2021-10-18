import React, {Component} from 'react';
import Player from './Player';

class GameAdmin  extends Component<any,any>{   

  constructor(props:any) {
    super(props);
    this.state = {username1:"",
        username2:"",
        playingId:0};
    this.parenthandleClick = this.parenthandleClick.bind(this);
  }

  onTodoChange(value:any,name:any){  
    this.setState({
      [name]:value
    }); 
  }

  parenthandleClick(value:any) {
    console.log(value)
    this.setState({
      playingId:value,
    });
  }

render(){
   return (       
    <div >
      <fieldset form="form1">
        <Player playerId={1} name={this.state.username1} enabled={this.state.playingId!==1} onKidclick = {this.parenthandleClick} label="Player One"> </Player> 
        <Player playerId={2} name={this.state.username2} enabled={this.state.playingId!==2} onKidclick = {this.parenthandleClick} label="Player Two"> </Player> 
        <span>Set Name of Player One: < input  onChange={e=>this.onTodoChange(e.target.value,"username1")}
         type="text"  name="username1" value={this.state.username1}/></span><br/>
        <span>Set Name of Player Two: <input onChange={e=>this.onTodoChange(e.target.value,"username2")}
         type="text" name="username2"value={this.state.username2}/></span>
      </fieldset>      
     </div>   
   
    );
  }
}
export default GameAdmin 