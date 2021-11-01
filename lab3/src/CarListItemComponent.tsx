import { render } from '@testing-library/react';
import React from 'react';
import { Car } from './data/Car';





interface Props {
    carItem:Car
}


const  CarListItemComponent:React.FC<Props>=(props)=>
 {  
    return (
      
        <div className ="row border mb-4">
 
            <div className ="col-2" >
                <img
                    // src={props.product.imageUrl}
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
            <p className="card-text">{props.carItem.pricePerDay}PLN</p>
  
            <button type="button"className="btn btn-primary">
                   Edit
                </button>
                <button type="button"className="btn btn-primary " >
                   Delete
                </button>
            </div>  
        
        </div>

    );
}


    

export default CarListItemComponent;
