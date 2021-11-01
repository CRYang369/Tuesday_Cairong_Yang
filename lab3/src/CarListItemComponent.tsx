import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { Car } from './data/Car';





interface Props {
    carItem:Car,
    index:number,
    onClickDelete:Function,
    editPrice:Function
}


const  CarListItemComponent:React.FC<Props>=(props)=>
 {  
    const [iseditable, setiseditable]=useState<boolean>(false);
    const handleseteditprice = () => {
     
        if(textInput.current&&iseditable){
            let price=textInput.current.value
            props.editPrice(props.index,price)
        }      
        setiseditable(!iseditable)  
            // setInputVal(textInput.current.value);
    };
    const textInput=React.createRef<HTMLInputElement>();
    return (
      
        <div className ="row border mb-4">
 
            <div className ="col-2" >
                <img
                    src={props.carItem.image}
                    className="img-fluid m-1" alt="..."/>
             </div>
            <div className ="col-3 mt-3">
                <h5 className="card-title">{props.carItem.name}</h5>                
       
            </div>
            <div className ="col-5 mt-3">

                <p className="card-text">{props.carItem.seats}seats</p>
                <p className="card-text">{props.carItem.doors}doors</p>
                <p className="card-text">{props.carItem.AC}air conditioning</p>
            </div>
            <div className="col-2 mt-4">
            <p className="card-text">Price per day</p>
            <p className="card-text">
            {iseditable ?  <input ref={textInput} type="text" name="inputval" defaultValue={props.carItem.pricePerDay}/>    
                         :props.carItem.pricePerDay}PLN
           
            </p>
  
            <button onClick={handleseteditprice} type="button"className="btn btn-primary">
                {iseditable ?  "Save" :"Edit"}
                </button>
                <button onClick= {()=>props.onClickDelete(props.index)} type="button"className="btn btn-primary " >
                   Delete
                </button>
            </div>  
        
        </div>

    );
}


    

export default CarListItemComponent;
