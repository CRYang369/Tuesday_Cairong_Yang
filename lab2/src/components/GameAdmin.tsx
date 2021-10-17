import React, {Component} from 'react';
import Player from './Player';

// function copyText()
// {
// 	document.getElementById("field2").value=document.getElementById("field1").value;
// }


// 字段1: <input type="text" id="field1" value="Hello World!"><br/>
// 字段2: <input type="text" id="field2">

// <button onClick="copyText()">Play</button>

class GameAdmin  extends Component{   


render(){
   return (

       
    <div >
      <fieldset form="form1">
        <Player name="zhangsan" label="Player One"> </Player> 
        <Player name="ls" label="Player Two"> </Player> 
      
      
        <span>Set Name of Player One: < input type="text"  name="username1"/></span><br/>
        <span>Set Name of Player Two: <input type="text" name="username2"/></span>

      </fieldset>
      
          </div>   
   
    );
  }
}
export default GameAdmin 