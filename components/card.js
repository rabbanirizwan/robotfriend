import React from 'react';

const Card =(props) => {
return(
    <div className="tc ma3 grow dib bg-lightest-blue">
<img src={`https://robohash.org/${props.name}?set=set1&?200x200`} alt="robo"/>
<div>
    <h2>{props.name}</h2>
    <p>{props.email}</p>
</div>

    </div>
);
}
export default Card;