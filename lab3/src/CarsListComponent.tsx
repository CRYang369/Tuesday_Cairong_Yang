import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { setConstantValue } from 'typescript';
import CarListItemComponent from './CarListItemComponent';
import { CARS } from './data/Car';
import { Car } from './data/Car';

function CarListComponent(props:any){
  

    const [inputVal, setInputVal]=useState<string>('');

    const onClick = (e:any) => {
        if(textInput.current)
            setInputVal(textInput.current.value);
    };
    const textInput=React.createRef<HTMLInputElement>();

const CarsElement=CARS.filter(car=>car.name.includes(inputVal)).map((item)=>
<CarListItemComponent carItem={item}/>);
    
        return (
            <div>  
          
             <input ref={textInput}  type="text" name="inputval" defaultValue={inputVal}/>    
             <input onClick={onClick }type="submit" value="Search"/> 
            
              {CarsElement}           
             
            </div>
           
            );
}
export default CarListComponent;