import React from 'react';
import Card from './card';
const CardList = ({robots}) =>{
    return(
        <div className='flex flex-wrap justify-center pt4'>
         {
           robots.map((user,i) =>{
            return(
            <Card  id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}
            key={i}/>
               );
              })
         }
        </div>
    );
}
export default CardList;