import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { setConstantValue } from 'typescript';
import CarListItemComponent from './CarListItemComponent';
import { CARS } from './data/Car';
import { Car } from './data/Car';

function CarListComponent(props:any){ 
    

    const [inputVal, setInputVal]=useState<string>('');
    const [carlist, setcarlist]=useState<Array<Car>>(CARS);


    const onClick = (e:any) => {
        if(textInput.current)
            setInputVal(textInput.current.value);
    };
    const textInput=React.createRef<HTMLInputElement>();

    function onClickDelete (index:number) {   
        var array = [...carlist]; // make a separate copy of the arrayvar index = array.indexOf(e.target.value)
        if (index !== -1) {
            array.splice(index, 1);
            setcarlist(array);
        }
    };
    const editPrice= (index:number,pricePerDay:number) => {
        var array = [...carlist]; 
        if (index !== -1) {
            array[index].pricePerDay=pricePerDay;
            setcarlist(array);
        }
    };

    const CarsElement=carlist.filter(car=>car.name.includes(inputVal))
        .map((item,index)=>
            <CarListItemComponent onClickDelete={onClickDelete} editPrice ={editPrice} carItem={item} index={index}/>);
      
        return (
            <div>  
          
             <input ref={textInput}  type="text" name="inputval" defaultValue={inputVal}/>    
             <input onClick={onClick }type="submit" value="Search"/> 
           
              {CarsElement}           
             
            </div>
           
            );
}
export default CarListComponent;