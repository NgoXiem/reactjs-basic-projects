import React from 'react';
import Tour from './Tour';
const Tours = ({data, handleClick}) => {
  return (
    <div>
      {data.map((tour) => (
        <Tour key={tour.id} id={tour.id} name={tour.name} image={tour.image} info ={tour.info} price={tour.price} handleClick={handleClick}></Tour>
      ))}    
    </div>
  );
};

export default Tours;
